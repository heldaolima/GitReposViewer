import { StyleSheet } from 'react-native';
import { globalStyle } from '../utils/globalStyle';

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 10,
        marginTop: 20,
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
        padding: 10,
    },
    imageAndText: {
      flexDirection: 'row'  
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 15,      
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#fff"
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
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
        color: 'white'
    },
    loadingContainer: {
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});