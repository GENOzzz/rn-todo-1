import PropTypes from 'prop-types';
import { memo } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GRAY, PRIMARY } from '../colors';
import Button from '../components/Button';
import EmptyList from '../components/EmptyList';
import List from '../components/List';
import ListItem from '../components/ListItem';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const todos = [
    { id: 1, task: 'React Native', isDone: false },
    { id: 2, task: 'FlatList', isDone: false },
    { id: 3, task: 'React Navigation', isDone: true },
    { id: 4, task: 'TODO APP', isDone: false },
    { id: 5, task: 'React.memo', isDone: true },
  ];
  /*{ id: 1, task: 'React Native', isDone: false },
    { id: 2, task: 'FlatList', isDone: false },
    { id: 3, task: 'React Navigation', isDone: true },
    { id: 4, task: 'TODO APP', isDone: false },
    { id: 5, task: 'React.memo', isDone: true },*/

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? <List data={todos} /> : <EmptyList />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ListScreen;
