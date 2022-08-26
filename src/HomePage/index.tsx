import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity
 } from 'react-native';
import { RepoList } from '../RepoList';
import { UserContainer } from '../UserContainer';

import { styles } from './styles';

export interface Repository {
    id: string;
    name: string;
    description: string;
}

export interface UserInfo {
    login: string;
    avatar_url: string;
    name: string;
    public_repos: Number;
    followers: Number;
    following: Number;
}

export function HomePage() {
    const [userName, setUserName] = useState('');
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [repoList, setRepoList] = useState<Repository[]>([]);
    
    
    function handleSubmit() {
        setIsFetching(true);
        
        try {
            fetchUser();
            fetchRepos();
        } catch(error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }

        setUserName('');
    }

    function fetchRepos() {
        axios.get(`https://api.github.com/users/${userName}/repos`)
            .then(response => setRepoList(response.data))
            .catch(error => console.log(error))
            .finally(() => setIsFetching(false));    
    }
    
    function fetchUser() {
        axios.get(`https://api.github.com/users/${userName}`)
        .then(response => {
            setNotFound(false);
            setUserInfo(response.data);
            console.log(userInfo);
        })
        .catch(error => {
            console.log(error);
            setUserInfo(null);
            setNotFound(true);
            setIsFetching(false);
        });
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>GitReposConsumer</Text>
                <View style={styles.inputContainer}>
            
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Type a GitHub username'
                        autoCapitalize='none'
                        autoFocus={true}
                        value={userName}
                        onChangeText={input => setUserName(input)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.text}>Search</Text>
                    </TouchableOpacity>
            
                </View>

            </View>
            <View style={styles.reposContainer}>
                {
                    isFetching ? 
                        <Text>Loading...</Text> 
                        :
                        <>
                            <UserContainer userInfo={userInfo}/>
                            <RepoList 
                                repoList={repoList} 
                                notFound={notFound}
                            />
                        </> 
                } 
            </View>

        </View>
  );
}