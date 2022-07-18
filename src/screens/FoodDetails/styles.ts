import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.color.bg,
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden'
  },
  contentContainer: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SulSansMedium',
    marginBottom: 8,
    color: theme.color.text
  },
  description: {
    fontSize: 16,
    color:  theme.color.text_secondary,
    fontFamily: 'SulSansRegular',
    marginBottom: 8,
  },
  servesDescription: {
    fontSize: 14,
    color: theme.color.text,
    fontFamily: 'SulSansRegular',
    marginBottom: 20,
  },
  priceValue: {
    fontSize: 16,
    color:  theme.color.text_secondary,
    fontFamily: 'SulSansRegular',
    marginBottom: 20,
  }
});
