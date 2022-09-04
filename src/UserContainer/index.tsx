import { View, Text, Image } from "react-native";
import { UserInfo } from "../HomePage";

import { styles } from "./styles";

interface Props {
    userInfo: UserInfo | null;
}

export function UserContainer({userInfo}:Props) {
    return (
        <View style={styles.container}>
            <Image source={{uri: userInfo?.avatar_url}} style={styles.image} />
            <Text style={styles.title}>{userInfo?.login}</Text>
            <View style={styles.numbersContainer}>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberKey}>Repositories</Text>
                    <Text style={styles.numberValue}>{userInfo?.public_repos}</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberKey}>Followers</Text>
                    <Text style={styles.numberValue}>{userInfo?.followers}</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberKey}>Following</Text>
                    <Text style={styles.numberValue}>{userInfo?.following}</Text>
                </View>
                
            </View>
        </View>
    );
}