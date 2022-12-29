import theme from './theme.style';
import {StyleSheet} from 'react-native'
const commonStyle = StyleSheet.create({
  headingText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    alignSelf: 'flex-start',
    padding: 10,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontFamily: 'Roboto',
    fontWeight: '400',
    // fontStyle: 'italic'
  },
  textInput: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    alignSelf: 'stretch',
    fontFamily: 'Roboto',
    fontWeight: '400',
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.BUTTON_BG_COLOR,
    color: 'black',
    fontSize: theme.FONT_SIZE_MEDIUM
  },
  container: {
    flex:1
  },
  textStyle: {
    color: theme.TEXT_COLOR,
    padding: theme.TEXT_INPUT_PADDING,
  },
  h1Text: {
    fontFamily: 'Roboto',
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.TEXT_COLOR,
    fontSize: theme.HEADER_FONT_SIZE_LARGE,
    marginBottom: 10
  },
  h2Text: {
    fontFamily: 'Roboto',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.TEXT_COLOR,
    fontSize: theme.HEADER_FONT_SIZE_MEDIUM
  },
  buttonContainer: {
    color: theme.BUTTON_TEXT_COLOR,
    backgroundColor: theme.BUTTON_BG_COLOR,
    fontSize: theme.BUTTON_FONT_SIZE,
    margin: 10,
    padding: 0,
    borderWidth: 1, 
    borderColor: theme.BUTTON_BG_COLOR, 
    borderRadius: 5
  }
});
export default commonStyle