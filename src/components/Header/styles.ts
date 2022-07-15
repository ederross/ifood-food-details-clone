import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    width: '100%',
    height: 56,
    top: 0,
    left: 0,
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    backgroundColor: theme.color.primary,
  },
  btnGoBackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 32,
    backgroundColor: theme.color.bg_transparent,
  },
});
