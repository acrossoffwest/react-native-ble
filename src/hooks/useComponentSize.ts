import { useState, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';

interface ComponentSize {
  width: number;
  height: number;
}

interface UseComponentSize {
  width: number;
  height: number;
  onLayout: (event: LayoutChangeEvent) => void;
}

const useComponentSize = (): UseComponentSize => {
  const [size, setSize] = useState<ComponentSize>({ width: 0, height: 0 });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return { ...size, onLayout };
};

export default useComponentSize;
