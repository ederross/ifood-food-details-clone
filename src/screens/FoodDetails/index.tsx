import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EstablishmentDeliveryTimeCard from '../../components/EstablishmentDeliveryTimeCard';
import Header from '../../components/Header';
import { BANNER_HEIGHT, TOPNAVI_H } from '../../utils/contants';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { ADDITIONALS_ITEM_LIST } from '../../data';
import AdditionalsItemList from '../../components/AdditionalsItemList';
import IncreaseBuyContainer from '../../components/IncreaseBuyContainer';

const FoodDetails = () => {
  const scrollAnim = useRef(new Animated.Value(0)).current;

  const safeArea = useSafeAreaInsets();

  const isFloating = !!scrollAnim;
  const [isTransparent, setTransparent] = useState(isFloating);
  const [selected, setSelected] = useState();

  const [customQuantity, setCustomQuantity] = useState(0);

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
      <StatusBar backgroundColor="transparent" />
      <View style={styles.container}>
        <Header
          title={'Sextou com Pizza deliciosa 😍'}
          scrollAnim={scrollAnim}
        />

        <IncreaseBuyContainer></IncreaseBuyContainer>

        <Animated.ScrollView
          contentContainerStyle={{ paddingBottom: 180 }}
          stickyHeaderIndices={ADDITIONALS_ITEM_LIST.map((obj, index) => {
            return obj.isHeader ? index + 2 : null;
          }).filter(Boolean)}
          contentInset={{ top: 90 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <View style={styles.bannerContainer}>
            <Animated.Image
              style={animatedStyles.banner(scrollAnim)}
              source={{
                uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
              }}
            />
          </View>
          <View style={[styles.contentContainer]}>
            <Text style={styles.title}>Refeição tam. Tradicional</Text>
            <Text style={styles.description}>
              Marmitex individual com arroz, feijão, acompanhamento escolido e
              salada
            </Text>
            <Text style={styles.servesDescription}>Serve até 3 pessoas</Text>

            <Text style={styles.priceValue}>A partir de R$ 20,00</Text>
            <EstablishmentDeliveryTimeCard />
          </View>

          {ADDITIONALS_ITEM_LIST.map((item, index) => (
            <AdditionalsItemList
              key={index}
              id={index}
              setSelected={setSelected}
              selected={selected}
              quantity={item.quantity}
              setCustomQuantity={setCustomQuantity}
              customQuantity={customQuantity}
              type={item.type}
              required={item.required}
              title={item.title}
              isHeader={item.isHeader}
            />
          ))}
        </Animated.ScrollView>
      </View>
    </>
  );
};

export const animatedStyles = {
  banner: (scrollAnim) => ({
    height: BANNER_HEIGHT,
    width: '200%',
    transform: [
      {
        translateY: scrollAnim.interpolate({
          inputRange: [-BANNER_HEIGHT, 0, BANNER_HEIGHT, BANNER_HEIGHT + 1],
          outputRange: [
            -BANNER_HEIGHT / 2,
            0,
            BANNER_HEIGHT * 0.75,
            BANNER_HEIGHT * 0.75,
          ],
        }),
      },
      {
        scale: scrollAnim.interpolate({
          inputRange: [-BANNER_HEIGHT, 0, BANNER_HEIGHT, BANNER_HEIGHT + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default FoodDetails;
