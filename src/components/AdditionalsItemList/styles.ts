import { StyleSheet } from "react-native";
import theme from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.color.bg,
    },
    table_title: {
      backgroundColor: 'orange',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      fontSize: 40,
      color: 'white',
    },
    item: {
      backgroundColor: 'red',
      padding: 20,
      marginBottom: 8,
    },
    categoryItem: {
      backgroundColor: theme.color.bg_secondary,
      padding: 16,
      width: '100%',
    },
    title: {
      fontSize: 20,
    },
    category: {
      fontSize: 30,
      color: 'white',
    },
  });
  