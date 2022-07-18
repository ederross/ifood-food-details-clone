import React, { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import { BANNER_HEIGHT, TOPNAVI_H } from '../../utils/contants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IHeader {
  title: string;
  action: string;
  isBackgroundVisible: boolean;
  scrollAnim: Animated.Value;
}

const Header = ({
  title,
  action,
  isBackgroundVisible,
  scrollAnim,
}: IHeader) => {
  const safeArea = useSafeAreaInsets();

  const isFloating = !!scrollAnim;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollAnim) {
      return;
    }
    const listenerId = scrollAnim.addListener((a) => {
      const topNaviOffset = BANNER_HEIGHT - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollAnim.removeListener(listenerId);
  });

  return (
    <>
      <View
        style={
          animatedStyles.container(safeArea, isFloating, isTransparent) as any
        }
      >
        <View style={styles.btnGoBackContainer}>
          <Entypo name="chevron-thin-down" size={18} color="white" />
        </View>
      </View>
    </>
  );
};

const animatedStyles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    // marginBottom: isTransparent ? -TOPNAVI_H - safeArea.top : 0,
    paddingLeft: 16,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'center',
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? 'transparent' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: (isTransparent) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: isTransparent ? '#FFF' : '#000',
  }),
};

export default Header;
