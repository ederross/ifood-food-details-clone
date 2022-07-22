import React, { useEffect, useState } from 'react';
import {
  Animated,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from './styles';
import theme from '../../global/theme';
import { currency } from '../../utils';
import { animatedStyles } from '../../animations/animationsStyles';

const IncreaseBuyContainer = () => {
  const [quantity, setQuantity] = useState(1);
  const amount = useState(42.8)[0];
  const [finalAmount, setFinalAmount] = useState(0);
  const INITIAL_TOP_VALUE = useState(new Animated.Value(10))[0];
  const OPACITY = useState(new Animated.Value(0))[0];
  const OPACITY_FIX = useState(new Animated.Value(0))[0];

  const handleAdd = () => {
    setQuantity(quantity + 1);
    Animated.sequence([
      Animated.timing(OPACITY, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(INITIAL_TOP_VALUE, {
        toValue: -10,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(INITIAL_TOP_VALUE, {
        toValue: -1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(OPACITY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(OPACITY_FIX, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleRemove = () => {
    setQuantity(quantity === 1 ? quantity - 0 : quantity - 1);
    setFinalAmount(finalAmount - amount);

    Animated.sequence([
      Animated.timing(OPACITY, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(INITIAL_TOP_VALUE, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(INITIAL_TOP_VALUE, {
        toValue: 10,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(INITIAL_TOP_VALUE, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(OPACITY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(OPACITY_FIX, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    setFinalAmount(amount * quantity);
  }, [quantity]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.increaseDecreaseContainer}>
          <TouchableOpacity
            onPress={handleRemove}
            style={styles.actionContainer}
          >
            <MaterialIcons
              activeOpacity={1}
              name={'remove'}
              size={24}
              color={quantity === 1 ? theme.color.border : theme.color.primary}
            />
          </TouchableOpacity>
          <View>
            <Animated.Text
              style={[
                animatedStyles.componentAdditionalItemsListTitle({
                  OPACITY,
                  INITIAL_TOP_VALUE,
                }),
                styles.title,
                {
                  position: 'absolute',
                  alignSelf: 'center',
                  color: theme.color.secondary,
                  fontSize: 14,
                },
              ]}
            >
              {quantity}
            </Animated.Text>
            <Animated.Text
              style={[
                animatedStyles.componentAdditionalItemsListTitle({
                  OPACITY: OPACITY_FIX,
                  INITIAL_TOP_VALUE,
                }),
                styles.title,
                {
                  alignSelf: 'center',
                  color: theme.color.secondary,
                  fontSize: 14,
                },
              ]}
            >
              {quantity}
            </Animated.Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleAdd}
            style={styles.actionContainer}
          >
            <MaterialIcons name={'add'} size={24} color={theme.color.primary} />
          </TouchableOpacity>
        </View>
        <Pressable style={styles.addButton}>
          <Text style={styles.title}>Adicionar</Text>
          <Text style={styles.title}>{currency(finalAmount)}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default IncreaseBuyContainer;
