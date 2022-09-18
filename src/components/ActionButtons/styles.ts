import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: THEME.COLORS.CAPTION_500
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.CAPTION_500
  }
});