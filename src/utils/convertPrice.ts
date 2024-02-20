interface ConverPriceProps {
  num: number;
  maxDigits?: number;
  currency: CurrencyEnumType;
}

const convertPrice = ({ currency, num, maxDigits = 2 }: ConverPriceProps) => {
  switch (currency) {
    case CurrencyEnumType.USD:
      return Number(num).toLocaleString('en-GE', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: maxDigits ? maxDigits : 0,
      });
    case CurrencyEnumType.ARS:
      return Number(num).toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: maxDigits ? maxDigits : 0,
      });
    case CurrencyEnumType.INR:
      return Number(num).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: maxDigits ? maxDigits : 0,
      });
    case CurrencyEnumType.VND:
      return Number(num).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    case CurrencyEnumType.GBP:
      return Number(num).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: maxDigits ? maxDigits : 0,
      });
    default:
      return Number(num).toLocaleString('en-GE', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: maxDigits ? maxDigits : 0,
      });
  }
};

export default convertPrice;
export enum CurrencyEnumType {
  USD = 'USD',
  ARS = 'ARS',
  GBP = 'GBP',
  JPY = 'JPY',
  INR = 'INR',
  VND = 'VND',
}
