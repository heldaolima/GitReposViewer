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
  
  if (notFound){
    return <Text>No user was found</Text>
  } 

  return (
    <>
    {
      repoList.length === 0 ? null : 
      <FlatList 
        data={repoList}
        keyExtractor={item =>item.id}
        renderItem={({item}) => renderItem(item)}
        />
    }
    </>
  );
  

}