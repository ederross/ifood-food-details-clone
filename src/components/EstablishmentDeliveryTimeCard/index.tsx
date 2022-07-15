import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import theme from '../../global/theme';

// import { Container } from './styles';

const EstablishmentDeliveryTimeCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <MaterialCommunityIcons
              name="storefront-outline"
              size={20}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.title}>Pizzaria do Ross</Text>
          </View>
          <View style={styles.column}>
            <FontAwesome
              name="star"
              size={14}
              color={theme.color.yellow_600}
              style={{ marginRight: 4 }}
            />
            <Text style={[styles.title, { color: theme.color.yellow_600 }]}>
              4.9
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.row}>
          <View style={styles.column}>
            <MaterialCommunityIcons
              name="racing-helmet"
              size={24}
              color={theme.color.primary}
              style={{ marginRight: 4 }}
            />
            <Text style={[styles.title, { marginRight: 8 }]}>33-43 min</Text>
            <View style={styles.dot} />
            <Text style={[styles.title, { color: theme.color.success }]}>
              Grátis
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default EstablishmentDeliveryTimeCard;
