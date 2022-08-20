import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
      },
    text: {
        color: '#fff'
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'visible'
    },
    title: {
        fontWeight: "bold",
        fontSize: 24
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        width: '100%'
    },
    textInput: {
        width: "96%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3
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
    reposContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        overflow: 'scroll'     
        // flex: 2,

    }
});