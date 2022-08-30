import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
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
        width: '60%'
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
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 30,
        width: '95%',
        minHeight: '20%',
        borderRadius: 20,
        // overflow: 'scroll'
    }
});