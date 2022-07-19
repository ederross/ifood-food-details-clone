import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { IAdditionalsItem } from '../../data/types';
import theme from '../../global/theme';
import { styles } from './styles';

const AdditionalsItemList = ({
  title,
  isHeader,
  quantity,
  required,
  type,
}: IAdditionalsItem) => {
  const [customQuantity, setCustomQuantity] = useState(0);

  const itemStyle = isHeader ? styles.categoryItem : styles.item;
  const textStyle = isHeader ? styles.categoryItem : styles.title;

  return (
    <>
      <View style={[itemStyle]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={[textStyle, { color: theme.color.text_secondary }]}>
              {title[0]}
            </Text>
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
          {title.length > 1 && (
            <>
              <View style={styles.radioButtonContainer}></View>
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
      </View>
    </>
  );
};

export default AdditionalsItemList;
