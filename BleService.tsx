import BleManager, {
  BleConnectPeripheralEvent,
  BleDisconnectPeripheralEvent,
  BleManagerDidUpdateValueForCharacteristicEvent,
  BleScanCallbackType,
  BleScanMatchMode,
  BleScanMode, Peripheral,
  Peripheral as PeripheralWithoutConnectInfo,
} from 'react-native-ble-manager';
import {
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';

export type Peripheral = PeripheralWithoutConnectInfo & {
  connected?: boolean;
  connecting?: boolean;
};

interface EventsI {
  bleManagerStartSuccess: () => void | undefined;
  bleManagerStartError: () => void | undefined;
  bleManagerStopScan: () => void | undefined;
  bleManagerStartScan: () => void | undefined;
  bleManagerDiscoverPeripheral: (peripheral: Peripheral) => void | undefined;
  bleManagerDisconnectPeripheral: (
    event: BleDisconnectPeripheralEvent,
  ) => void | undefined;
  bleManagerDidUpdateValueForCharacteristic: (
    event: BleManagerDidUpdateValueForCharacteristicEvent,
  ) => void | undefined;
  bleManagerConnectPeripheral: (
    event: BleConnectPeripheralEvent,
  ) => void | undefined;
};

class Events implements EventsI {
  bleManagerConnectPeripheral(event: BleConnectPeripheralEvent): void | undefined {
    return undefined;
  }

  bleManagerDidUpdateValueForCharacteristic(event: BleManagerDidUpdateValueForCharacteristicEvent): void | undefined {
    return undefined;
  }

  bleManagerDisconnectPeripheral(event: BleDisconnectPeripheralEvent): void | undefined {
    return undefined;
  }

  bleManagerDiscoverPeripheral(peripheral: Peripheral): void | undefined {
    return undefined;
  }

  bleManagerStartError(): void | undefined {
    return undefined;
  }

  bleManagerStartScan(): void | undefined {
    return undefined;
  }

  bleManagerStartSuccess(): void | undefined {
    return undefined;
  }

  bleManagerStopScan(): void | undefined {
    return undefined;
  }
}

export default class BleService {
  private _bleManagerModule = NativeModules.BleManager;
  private _bleManagerEmitter = new NativeEventEmitter(this._bleManagerModule);
  private _events: Events;
  private _listeners: EmitterSubscription[];
  private _peripherals: Map<Peripheral['id'], Peripheral>;

  constructor() {
    this._listeners = [];
    this._events = new Events();
    this._peripherals = new Map();

    console.debug('BleManager', BleManager);
  }

  async start () {
    try {
      await BleManager.start({showAlert: false});
      this.runEvent(this._events.bleManagerStartSuccess);
      console.debug('[BleService]: BleManager started.');
    } catch (err) {
      this.runEvent(this._events.bleManagerStartError);
      console.debug('[BleService]: BeManager could not be started.', err);
    }
    await this.handle_permissions();
  }

  setEvents(events: Events) {
    this._events = events;
    this.setupListiners(events);
  }

  async handle_permissions() {
    // po requestach, jak sie zrobi .then() nastepnie gdy (resoult) cos zwroci to oznacza, że ma perma jak nie to nie ma.
    if (Platform.OS === 'android') {
      if (Platform.Version >= 31)
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        ]);
      else if (Platform.Version >= 23)
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    }
  }

  async scan() {
    this.runEvent(this._events.bleManagerStartScan);
    this.clearPeripherals();
    try {
      await BleManager.scan([], 3, false, {
        matchMode: BleScanMatchMode.Sticky,
        scanMode: BleScanMode.LowLatency,
        callbackType: BleScanCallbackType.AllMatches,
      })
      console.debug('[startScan] scan promise returned successfully.');
    } catch (err) {
      console.error('[startScan] ble scan returned in error', err);
    }
  }

  destroy() {
    this.destroyListiners();
  }

  getPeripherals() {
    return this._peripherals;
  }

  connect(p: Peripheral) {
    return BleManager.connect(p.id);
  }

  async read(peripheral: Peripheral) {
    // await BleManager.requestMTU(peripheral.id, 512);
    const peripheralInfo = await BleManager.retrieveServices(peripheral.id);
    console.log("Peripheral info:", peripheralInfo);
    try {
      const result = BleManager.startNotification(
          peripheral.id,
          '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
          '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
      );
      console.log('Start notification result:', result);
    } catch (e) {
      console.error(e);
    }
  }

  private addPeripheral(p: Peripheral) {
    this._peripherals.set(p.id, p);
  }

  private clearPeripherals() {
    this._peripherals = new Map();
  }

  private destroyListiners() {
    for (const listener of this._listeners) {
      if (listener) listener.remove();
    }
  }

  private setupListiners(events: Events) {
    this.destroyListiners();
    this._listeners = [
      this._bleManagerEmitter.addListener(
        'BleManagerDiscoverPeripheral',
        peripheral => {
          this.addPeripheral(peripheral);
          this.runEvent(events.bleManagerDiscoverPeripheral, peripheral);
        },
      ),
      this._bleManagerEmitter.addListener('BleManagerStopScan', () =>
        this.runEvent(events.bleManagerStopScan),
      ),
      this._bleManagerEmitter.addListener(
        'BleManagerDisconnectPeripheral',
        event => this.runEvent(events.bleManagerDisconnectPeripheral, event),
      ),
      this._bleManagerEmitter.addListener(
        'BleManagerDidUpdateValueForCharacteristic',
        event =>
          this.runEvent(
            events.bleManagerDidUpdateValueForCharacteristic,
            event,
          ),
      ),
      this._bleManagerEmitter.addListener(
        'BleManagerConnectPeripheral',
        event => this.runEvent(events.bleManagerConnectPeripheral, event),
      ),
    ];
  }

  private runEvent(
    event: CallableFunction | undefined,
    ...optionalParams: any[]
  ): void {
    if (event) {
      event(...optionalParams);
    }
  }
}
