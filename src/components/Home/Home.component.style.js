import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style';

export default StyleSheet.create({
    container: {
        paddingVertical: theme.CONTAINER_PADDING,
        alignItems: 'center'
    },
    textTitle: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        alignSelf: 'flex-start',
        padding: 10,
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18
    },
    textArea: {
        flex: 1,
        padding: theme.CONTAINER_PADDING,
        alignSelf: 'stretch',
        overflow: 'scroll',
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT
    }
});
