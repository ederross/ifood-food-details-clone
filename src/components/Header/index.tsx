import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { BANNER_HEIGHT, TOPNAVI_H } from '../../utils/contants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../global/theme';
import { MotiView, AnimatePresence } from 'moti';

interface IHeader {
  title: string;
  action: string;
  isBackgroundVisible: boolean;
  scrollAnim: Animated.Value;
}

function Shape() {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={styles.shape}
    />
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
});

const Header = ({
  title,
  action,
  isBackgroundVisible,
  scrollAnim,
}: IHeader) => {
  const safeArea = useSafeAreaInsets();

  const isFloating = !!scrollAnim;
  const [isTransparent, setTransparent] = useState(isFloating);
  const [isTextOffset, setIsTextOffset] = useState(isFloating);
  const INITIAL_TOP_VALUE = useState(new Animated.Value(-50))[0];
  const OPACITY = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (!scrollAnim) {
      return;
    }
    const listenerId = scrollAnim.addListener((a) => {
      const topNaviOffset = BANNER_HEIGHT - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);

      const textOffset = BANNER_HEIGHT - TOPNAVI_H - safeArea.top + 48;
      isTextOffset !== a.value < textOffset && setIsTextOffset(!isTextOffset);
    });
    return () => scrollAnim.removeListener(listenerId);
  });

  const handleTranslateToggleYAnimation = () => {
    if (isTextOffset) {
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
        toValue: -15,
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

  useEffect(() => {
    handleTranslateToggleYAnimation();
  }, [isTextOffset]);

  return (
    <>
      <View style={animatedStyles.container(safeArea, isTransparent) as any}>
        <View style={animatedStyles.btnGoBackContainer(isTransparent) as any}>
          <Entypo
            name="chevron-thin-down"
            size={18}
            color={!isTransparent ? theme.color.primary : theme.color.bg}
          />
        </View>

        <Animated.Text
          style={[
            animatedStyles.title(INITIAL_TOP_VALUE, OPACITY),
            { top: 20 },
          ]}
        >
          Sextou com Pizza deliciosa 😍
        </Animated.Text>
        <View />
      </View>
    </>
  );
};

const animatedStyles = {
  container: (safeArea, isTransparent) => ({
    paddingTop: safeArea.top,
    position: 'absolute',
    flexDirection: 'row',

    top: 0,
    left: 0,
    width: '100%',
    paddingLeft: 16,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'space-between',
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? 'transparent' : '#FFF',
    zIndex: 100,
  }),
  title: (INITIAL_TOP_VALUE, OPACITY) => ({
    fontFamily: theme.fonts.SulSansRegular,
    left: -16,
    opacity: OPACITY,
    transform: [{ translateY: INITIAL_TOP_VALUE }],
  }),
  btnGoBackContainer: (isTransparent) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 32,
    backgroundColor: isTransparent
      ? theme.color.bg_transparent_dark
      : theme.color.bg,
  }),
};

export default Header;
