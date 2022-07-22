import React, { useEffect, useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IAdditionalsItemListTYPES } from '../../data/types';
import theme from '../../global/theme';
import { styles } from './styles';
import { animatedStyles } from '../../animations/animationsStyles';
import { handleTranslateToggleYAnimation } from '../../animations/useToggleYAnimation';

export interface IAdditionalsItemListComponent {
  id: number;
  title: string[];
  isHeader: boolean;
  quantity: number;
  required: boolean;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  customQuantity: number;
  setCustomQuantity: React.Dispatch<React.SetStateAction<any>>;
  selected: any;
  type: IAdditionalsItemListTYPES;
}

const AdditionalsItemList = ({
  title,
  isHeader,
  quantity,
  required,
  type,
  selected,
  setSelected,
  customQuantity,
  setCustomQuantity,
  id,
}: IAdditionalsItemListComponent) => {
  const itemStyle = isHeader ? styles.categoryItem : styles.item;
  const textStyle = isHeader ? styles.categoryItem : styles.title;

  const INITIAL_TOP_VALUE = useState(new Animated.Value(-50))[0];
  const OPACITY = useState(new Animated.Value(0))[0];

  const handleSelected = () => {
    setSelected(selected === id ? 0 : id);
    Vibration.vibrate(1000);
    setCustomQuantity(selected === id ? 0 : 1);
  };

  useEffect(() => {
    handleTranslateToggleYAnimation({
      conditional: selected === id,
      INITIAL_TOP_VALUE,
      OPACITY,
      initialTopValueNum: -5,
    });
  }, [selected, OPACITY]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={isHeader ? () => {} : handleSelected}
        style={[itemStyle]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={[textStyle]}>{title[0]}</Text>
            {title.length > 1 && (
              <>
                <Text style={styles.description}>{title[1]}</Text>
              </>
            )}
            {quantity > 0 && (
              <Text style={[styles.quantityLabel]}>
                {customQuantity + ' de ' + quantity}
              </Text>
            )}
          </View>
          {title.length > 1 && type === IAdditionalsItemListTYPES.RadioButton && (
            <>
              <TouchableOpacity
                onPress={isHeader ? () => {} : handleSelected}
                style={[
                  styles.radioButtonContainer,
                  {
                    borderWidth: selected === id ? 6 : 0,
                    borderColor: theme.color.primary,
                  },
                ]}
              >
                {selected === id && (
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 12,
                      backgroundColor: 'white',
                    }}
                  ></View>
                )}
              </TouchableOpacity>
            </>
          )}
        </View>
        {required && (
          <>
            {selected ? (
              <Animated.View
                style={[
                  animatedStyles.componentAdditionalItemsListTitle({
                    INITIAL_TOP_VALUE,
                    OPACITY,
                  }),
                  styles.requiredCheckIconContainer,
                ]}
              >
                <MaterialIcons
                  styles={styles.checkIcon}
                  name={'check'}
                  size={24}
                  color={theme.color.success}
                />
              </Animated.View>
            ) : (
              <View style={styles.requiredContainer}>
                <Text style={styles.requiredText}>Obrigatório</Text>
              </View>
            )}
          </>
        )}

        {title.length > 1 && <View style={styles.divisor}></View>}
      </TouchableOpacity>
    </>
  );
};

export default AdditionalsItemList;
