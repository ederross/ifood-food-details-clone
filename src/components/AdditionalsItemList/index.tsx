import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/theme';
import { styles } from './styles';

// import { Container } from './styles';

const AdditionalsItemList = ({ title, isHeader }) => {
    const textStyle = isHeader ? styles.categoryItem : styles.title;
    const itemStyle = isHeader ? styles.categoryItem : styles.item;
    return (
      <View style={[itemStyle]}>
        <Text style={textStyle}>{title}</Text>
      </View>
    );
};

export default AdditionalsItemList;
