import PropTypes from 'prop-types';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GRAY, PRIMARY } from '../colors';
import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';
import { nanoid } from 'nanoid';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();

  const [todos, setTodos] = useState([
    { id: 1, task: 'task1', isDone: false },
    { id: 2, task: 'task2', isDone: false },
    { id: 3, task: 'task3', isDone: false },
    { id: 4, task: 'task4', isDone: false },
    { id: 5, task: 'task5', isDone: false },
    { id: 6, task: 'task6', isDone: false },
    { id: 7, task: 'task7', isDone: false },
    { id: 8, task: 'task8', isDone: false },
    { id: 9, task: 'task9', isDone: false },
    { id: 10, task: 'task10', isDone: false },
    { id: 11, task: 'task11', isDone: false },
    { id: 12, task: 'task12', isDone: false },
    { id: 13, task: 'task13', isDone: false },
    { id: 14, task: 'task14', isDone: false },
    { id: 15, task: 'task15', isDone: false },
    { id: 16, task: 'task16', isDone: false },
  ]);

  const [isBottom, setIsBottom] = useState(false);

  const onInsert = (task) => {
    const id = nanoid();
    setTodos((prev) => [{ id, task, isDone: false }, ...prev]);
  };

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? (
        <List data={todos} setIsBottom={setIsBottom} />
      ) : (
        <EmptyList />
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom} />
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
