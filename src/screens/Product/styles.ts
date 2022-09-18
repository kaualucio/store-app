import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  productContainer: {
    position: 'relative',
    flex: 1,
    marginTop: 16,
    alignItems: 'center'
  },
  banner: {
    width: 260,
    height: 280,
    borderRadius: 12,
  },
  productDetails: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  },
  description: {
    marginVertical: 8,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  price: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  cartButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});