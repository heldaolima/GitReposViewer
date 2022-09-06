import { StyleSheet} from "react-native";
import { globalStyle } from "../utils/globalStyle";

export const styles = StyleSheet.create({
    notFoundContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    notFoundText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    userContainer: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        padding: 30,
        position: 'relative',
        width:'99%',
        borderRadius: 15,
        backgroundColor: globalStyle.colors.backgroundSecondary,
    },

    reposContainer: {
        flex:1
    }
})