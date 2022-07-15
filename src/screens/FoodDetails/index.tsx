import React, { useRef } from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EstablishmentDeliveryTimeCard from '../../components/EstablishmentDeliveryTimeCard';
import Header from '../../components/Header';
import { BANNER_HEIGHT } from '../../utils/contants';
import { styles } from './styles';



const FoodDetails = () => {
  const scrollAnim = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View>
        <Header
          title={''}
          isBackgroundVisible={false}
          action={''}
          scrollAnim={scrollAnim}
        />
        <Animated.ScrollView
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
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Refeição tam. Tradicional</Text>
            <Text style={styles.description}>
              Marmitex individual com arroz, feijão, acompanhamento escolido e
              salada
            </Text>
            <Text style={styles.servesDescription}>Serve até 3 pessoas</Text>

            <Text style={styles.priceValue}>A partir de R$ 20,00</Text>
            <EstablishmentDeliveryTimeCard />
           
          </View>
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
