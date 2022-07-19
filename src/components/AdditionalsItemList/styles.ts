import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  item: {
    padding: 0,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 8,
  },
  categoryItem: {
    flexDirection: 'row',
    backgroundColor: theme.color.bg_secondary,
    paddingTop: 8,
    paddingLeft: 12,
    paddingBottom: 0,
    marginBottom: 16,
    width: '100%',
    fontSize: 18,
    fontFamily: 'SulSansMedium',
    justifyContent: 'space-between',
  },
  quantityLabel: {
    fontFamily: 'SulSansMedium',
    fontSize: 14,
    marginTop: -16,
    paddingLeft: 12,
    paddingBottom: 16,
    color: theme.color.text_secondary,
  },
  title: {
    fontFamily: 'SulSansRegular',
    fontSize: 16,
  },
  descriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  description: {
    fontFamily: 'SulSansRegular',
    fontSize: 14,

    color: theme.color.text_secondary,
  },
  divisor: {
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: theme.color.bg_secondary,
  },
  requiredContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: theme.color.bg_secondary_button,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginRight: 16,
  },
  requiredText: {
    fontSize: 10,
    fontFamily: 'SulSansRegular',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  radioButtonContainer: {
    alignSelf: 'center',
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: theme.color.bg_secondary,
  },
});
