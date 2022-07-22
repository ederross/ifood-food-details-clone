import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const IncreaseBuyContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.increaseDecreaseContainer}></View>
        <View style={styles.addButton}>
          <Text style={styles.title}>Adicionar</Text>
          <Text style={styles.title}>R$ 42,80</Text>
        </View>
      </View>
    </>
  );
};

export default IncreaseBuyContainer;
