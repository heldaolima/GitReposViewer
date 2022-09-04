import { StyleSheet } from 'react-native';
import { globalStyle } from '../utils/globalStyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // alignItems: 'center',
        // overflow: 'scroll'
    },
    text: {
        color: '#fff'
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'visible',
        backgroundColor: '#161B22',
        padding: 15
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#fff"
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        width: '60%',
        color: '#fff',
    },
    textInput: {
        width: "100%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        backgroundColor: '#0D1117',
        color: '#fff'
    },
    button: {
        height: 32,
        width: 120,
        padding: 5,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    userContainer: {
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 30,
        position: 'relative',
        width:'99%',
        borderRadius: 5,
        backgroundColor: globalStyle.colors.backgroundSecondary,
    },
    reposContainer: {

    }
});