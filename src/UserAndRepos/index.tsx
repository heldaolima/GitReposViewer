import { View, Text, ScrollView} from "react-native";
import { Repository, UserInfo } from "../HomePage";
import { RepoList } from "../RepoList";
import { UserContainer } from "../UserContainer";
import { styles } from "./styles";

interface Props {
    userInfo: UserInfo | null;
    notFound: boolean;
    repoList: Repository[];
}

export function UserAndRepos({userInfo, notFound, repoList}:Props) {
    if (notFound)
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>User not found</Text>
            </View>
        )

    if (!userInfo) return null;
    
    return (
        <ScrollView>
            <View style={styles.userContainer}>
                <UserContainer userInfo={userInfo} />
            </View>
            <View style={styles.reposContainer}>
                <RepoList repoList={repoList} notFound={notFound}/>
            </View>
        </ScrollView>
    )
}