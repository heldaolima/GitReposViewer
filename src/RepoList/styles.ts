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
    width: '100%',
    overflow: 'visible',
    borderRadius: 6,
    borderColor: '#30363d',
    backgroundColor: '#0D1117'
    // overflow: 'scroll'
    // marginHorizontal: 5
  },

  repoTitle: {
    fontSize: 24,
    marginBottom: 15,
    color: '#fff',
  },

  repoDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: '#fff',
  },
  repoLanguage: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#fff',
  }
});