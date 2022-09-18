import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"   
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.LG
  },
  emptyView: {
    width: 50,
    height: 50,
  }
});