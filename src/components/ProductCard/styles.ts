import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/THEME';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 250,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  banner: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 12,
  },
  productInfo: {
    paddingBottom: 8,
    paddingHorizontal: 10
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  price: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  }
});