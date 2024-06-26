import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBar: {
    marginLeft: 5,
    marginRight: 30,
    margin: 10,
    backgroundColor: 'white',
  },

  results: {
    width: '100%',
  },

  title: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  titleText: {
    color: '#00215E',
  },

  group: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  groupText: {
    lineHeight: 10,
    color: '#00215E',
  },

  store: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storage: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },

  classification: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 50,
    width: 50,
    margin: 5,
  },

  effect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  effects: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
});
