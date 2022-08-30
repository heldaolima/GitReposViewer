import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
  flatListContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
    
  },

  repoContainer: {
    marginTop: 10,
    padding: 16,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#30363d',
    
    // marginHorizontal: 5
  },

  repoTitle: {
    fontSize: 32,
    marginBottom: 15,
  },

  repoDescription: {
    fontSize: 16,
    marginBottom: 15
  },
  repoLanguage: {
    fontSize: 12,
    fontStyle: 'italic'
  }
});