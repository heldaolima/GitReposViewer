import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
  flatListContainer: {
    marginBottom: 12,
    marginTop: 12,
    paddingBottom: 50
  },

  repoContainer: {
    marginTop: 10,
    padding: 16,
    borderWidth: 1,
    width: '100%',
    // overflow: 'visible',
    borderRadius: 10,
    borderColor: '#30363d',
    backgroundColor: '#0D1117'
    // overflow: 'scroll'
    // marginHorizontal: 5
  },

  repoTitle: {
    fontSize: 24,
    marginBottom: 15,
    textDecorationLine: 'underline',
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