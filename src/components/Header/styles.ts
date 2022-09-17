import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    height: 60,
    justifyContent: "space-between",
    alignItems: "center"    
  },
  logo: {
    color: THEME.COLORS.PRIMARY_500,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  cart: {
    position: 'relative'
  },
  cartAlertContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartAlertText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});