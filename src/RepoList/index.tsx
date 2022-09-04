import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Linking } from 'react-native';
import axios from 'axios';

import { styles } from './styles';
import { Repository} from '../HomePage';

interface Props {
  repoList: Repository[];
  isFetching?: boolean;
  notFound: boolean;
}

export function RepoList({repoList, notFound}:Props) {
  function renderItem(repo: Repository) {
    return (
      <View style={styles.repoContainer}>
        <Text style={styles.repoTitle} 
          onPress={() => Linking.openURL(repo.html_url)}
          >
              {repo.name}
        </Text>
        <Text style={styles.repoDescription}>
          {repo.description ? repo.description : "No description"}
        </Text>
        <Text style={styles.repoLanguage}>
          {repo.language}
        </Text>
      </View>
    )
  }
  
  return notFound ? null : 

  (
      // <View style={styles.flatListContainer}>
        <FlatList
          // contentContainerStyle={{alignItems:'center', justifyContent:'space-around'}}
          data={repoList}
          keyExtractor={item =>item.id}
          renderItem={({item}) => renderItem(item)}

          />
      // </View>
  );
  

}