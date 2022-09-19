import { THEME } from './../../theme/THEME';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  creditCard: {
    marginTop: 32,
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 16,
  }
});