import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/THEME';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  inputContainer: {
    marginVertical: 32,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 46,
    borderRadius: 23,
    backgroundColor: THEME.COLORS.TEXT,
    paddingLeft: 12
  },
  input: {
    width: '100%',
    height: 46,
    marginLeft: 8,
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  listStyle: {
    marginTop: 10,
    marginBottom: 32
  },
  listStyleContent: {
    // paddingLeft: 16,
    paddingRight: 32
  }
});