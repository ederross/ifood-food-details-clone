import theme from '../global/theme';
import { TOPNAVI_H } from '../utils/contants';
import { IComponentHeader } from './animationsTypes';
import { IToggleTranslateYAnimation } from './animationsTypes';

export const animatedStyles = {
  //   Header component styles below
  componentHeaderContainer: ({
    safeArea,
    isTransparent,
  }: IComponentHeader) => ({
    paddingTop: safeArea.top,
    position: 'absolute',
    flexDirection: 'row',

    top: 0,
    left: 0,
    width: '100%',
    paddingLeft: 16,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: 'space-between',
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? 'transparent' : '#FFF',
    zIndex: 100,
  }),
  componentHeaderTitle: ({INITIAL_TOP_VALUE, OPACITY}: IToggleTranslateYAnimation) => ({
    fontFamily: theme.fonts.SulSansRegular,
    left: -16,
    opacity: OPACITY,
    transform: [{ translateY: INITIAL_TOP_VALUE }],
  }),
  componentHeaderBtnGoBackContainer: (isTransparent) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 32,
    backgroundColor: isTransparent
      ? theme.color.bg_transparent_dark
      : theme.color.bg,
  }),
  //   AdditionalsItemList component styles below
  componentAdditionalItemsListTitle: ({INITIAL_TOP_VALUE, OPACITY}: IToggleTranslateYAnimation) => ({
    opacity: OPACITY,
    transform: [{ translateY: INITIAL_TOP_VALUE }],
  }),
};
