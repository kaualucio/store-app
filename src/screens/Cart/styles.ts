import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  checkoutContainer: {
    flex: 1,
    alignItems: 'center'
  },
  produtsOnCart: {
    marginTop: 20,
    maxHeight: 400,
    width: '100%'
  },
  totalPrice: {
    marginTop: 30,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
    alignSelf: 'flex-start'
  },
});