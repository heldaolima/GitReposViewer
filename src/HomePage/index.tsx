import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';


import { RepoList } from '../RepoList';
import { UserContainer } from '../UserContainer';

import { styles } from './styles';
import * as githubLogo from '../assets/githubLogo.png';

export interface Repository {
    id: string;
    name: string;
    description: string;
    owner: {
        login: string;
    }
    html_url: string;
    language: string;
}

export interface UserInfo {
    login: string;
    avatar_url: string;
    name: string;
    public_repos: string;
    followers: string;
    following: string;
}

export function HomePage() {
    const [userName, setUserName] = useState('');
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [repoList, setRepoList] = useState<Repository[]>([]);
    
    
    async function handleSubmit() {
        setIsFetching(true);
        
        try {
            const userResponse = await axios.get(`https://api.github.com/users/${userName}`);
            setUserInfo(userResponse.data);
            setNotFound(false);
            try {
                const reposResponse = await axios.get(`https://api.github.com/users/${userName}/repos`);
                setRepoList(reposResponse.data)
            } catch(error) {
                console.log(error);
            }

        } catch(error) {
            console.log(error);
            setNotFound(true);
            setUserInfo(null);
            setRepoList([]);
        } finally {
            setIsFetching(false);
            setUserName('');
        }
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
                        onSubmitEditing={handleSubmit}
                        placeholderTextColor={"#fff"}
                        selectionColor={"#fff"}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.text}>Search</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView 
                contentContainerStyle={{
                            alignItems:'center',
                            // justifyContent: 'center',
                            marginTop: 10
                        }}
                >
                {
                    isFetching ?
                        <Text style={{color:'white'}}>Loading</Text> 
                            // <TailSpin 
                            //         height="80"
                            //         width="80"
                            //         color="#000"
                            //         ariaLabel='tail-spin-loading'
                            //         visible={true}
                            //     /> 
                            :
                    <>
                        <View style={styles.userContainer}>
                            <UserContainer userInfo={userInfo} notFound={notFound}/>
                        </View>
                        <View style={styles.reposContainer}>
                            <RepoList
                                repoList={repoList}
                                notFound={notFound}
                            />
                        </View>
                    </>
                }                
            </ScrollView>

        </View>
  );
}