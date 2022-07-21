import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { IAdditionalsItemListTYPES } from '../../data/types';
import theme from '../../global/theme';
import { styles } from './styles';

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

  const handleSelected = () => {
    setSelected(selected === id ? 0 : id);
    Vibration.vibrate(1000);
    setCustomQuantity(selected === id ? 0 : 1);
  };

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
              {/* <Checkbox
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 24,
                  backgroundColor: theme.color.bg_secondary,
                  borderColor: theme.color.bg_secondary,
                }}
                value={isChecked}
                onValueChange={handleSelected}
              /> */}

              {/* <RadioButton
                value={String(id)}
                theme={{
                  roundness: 0,
                  mode: 'exact',
                  animation: { scale: 0},
                  colors: {

                    backdrop: 'blue',
                    background: 'red',
                    primary: theme.color.primary,
                    accent: theme.color.primary,
                    onSurface: 'blue',
                  },
                }}
                
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSelected;
                }}
              /> */}
            </>
          )}
        </View>
        {required && (
          <>
            <View style={styles.requiredContainer}>
              <Text style={styles.requiredText}>Obrigatório</Text>
            </View>
          </>
        )}

        {title.length > 1 && <View style={styles.divisor}></View>}
      </TouchableOpacity>
    </>
  );
};

export default AdditionalsItemList;
