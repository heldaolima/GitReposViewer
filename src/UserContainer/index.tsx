import { View, Text, Image } from "react-native";
import { UserInfo } from "../HomePage";

import { styles } from "./styles";

interface Props {
    userInfo: UserInfo | null;
    notFound: boolean;
}

export function UserContainer({userInfo, notFound}:Props) {
    if (notFound) {
        return <Text>User not Found</Text>
    }
    
    else return (
        <View style={styles.container}>
            <Image source={{uri: userInfo?.avatar_url}} style={styles.image} />
            <Text style={styles.title}>{userInfo?.login}</Text>
            <View style={styles.numbersContainer}>
                <Text style={styles.numberText}>Public Repositories: {userInfo?.public_repos}</Text>
            </View>
        </View>
    );
}