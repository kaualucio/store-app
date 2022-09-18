import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.TEXT,
    width: "100%",
    height: 180,
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15
  },
  image: {
    width: 110,
    height: "100%"
  },
  productInfo: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.PRIMARY_500
  },
  price: {
    marginVertical: 10,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.CAPTION_500
  },
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