import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        marginBottom: 20,
        marginTop: 5,
        width: 300,
        height: 300,
        borderRadius: 150
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
    },
    numbersContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    numberContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 15,
        marginBottom: 5
    },
    numberKey: {
        fontSize: 15,
        color: '#fff',
    },
    numberValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})