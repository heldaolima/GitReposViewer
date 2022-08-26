import { View, Text, Image } from "react-native";
import { UserInfo } from "../HomePage";

import { styles } from "./styles";

interface Props {
    userInfo: UserInfo | null;
}

export function UserContainer({userInfo}:Props) {
    if (userInfo)
        return (
            <View style={styles.container}>
                <Image source={{uri: userInfo.avatar_url}} style={{width: 100, height: 100}} />
                <Text>Nome: {userInfo.name}</Text>
            </View>
        );
    else return null;
}