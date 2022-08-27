import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
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
        <Text style={styles.repoText}>{repo.name}: {repo.description}</Text>
      </View>
    )
  }
  
  return notFound ? null : 

  (
      <View style={styles.flatListContainer}>
        <FlatList
          data={repoList}
          keyExtractor={item =>item.id}
          renderItem={({item}) => renderItem(item)}
          
          />
      </View>
  );
  

}