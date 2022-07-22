import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 124,
    borderWidth: 1,
    borderTopColor: theme.color.border,
    padding: 16,
    backgroundColor: theme.color.bg,
  },
  increaseDecreaseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    borderColor: theme.color.border,
    backgroundColor: theme.color.bg,
    maxHeight: 52,
    marginRight: 12,
    borderRadius: 4,
  },
  actionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2,
    padding: 16,
    maxHeight: 52,
    borderRadius: 4,
    backgroundColor: theme.color.primary,
    fontFamily: theme.fonts.SulSansRegular,
  },
  title: {
    color: theme.color.bg,
    fontSize: 16,
    fontFamily: theme.fonts.SulSansMedium,
  },
});
