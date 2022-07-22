import { useState } from 'react';
import { Animated } from 'react-native';

export interface IToggleTranslateYAnimation {
  conditional?: boolean;
  INITIAL_TOP_VALUE: any;
  initialTopValueNum?: any;
  OPACITY: any;
}

export const handleTranslateToggleYAnimation = ({
  conditional,
  INITIAL_TOP_VALUE,
  initialTopValueNum,
  OPACITY,
}: IToggleTranslateYAnimation) => {
  if (conditional) {
    Animated.timing(INITIAL_TOP_VALUE, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(OPACITY, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    return;
  } else {
    Animated.timing(INITIAL_TOP_VALUE, {
      toValue: initialTopValueNum,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(OPACITY, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    return;
  }
};
