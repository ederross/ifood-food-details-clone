import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 56,
    borderWidth: 1,
    borderColor: theme.color.border,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    marginVertical: 8,
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: theme.color.border,
    borderStyle: 'dashed',
  },
  dot: {
    width: 4,
    height:4,
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: theme.color.text_secondary,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 12,
    fontFamily: 'SulSansRegular',
    color: theme.color.text,
  },
});
