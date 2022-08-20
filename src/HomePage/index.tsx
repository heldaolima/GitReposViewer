import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity
 } from 'react-native';
import { RepoList } from '../RepoList';

import { styles } from './styles';

interface Repository {
    id: string;
    name: string;
    description: string;
  }

export function HomePage() {
    const [userName, setUserName] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [repoList, setRepoList] = useState<Repository[]>([]);

    function onUserNotFound() {
       
    }

    function handleSubmit() {
        setIsFetching(true);
        axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(response => { 
            setNotFound(false);
            setRepoList(response.data);
        })
        .catch(error => {
            console.log(error);
            setRepoList([]);
            setNotFound(true);
        })
        .finally(() => setIsFetching(false));
        setUserName('');
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
                        <RepoList 
                            repoList={repoList} 
                            notFound={notFound}
                            setNotFound={() => setNotFound(false)}
                        />
                } 
            </View>

        </View>
  );
}