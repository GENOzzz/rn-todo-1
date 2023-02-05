import PropTypes from 'prop-types';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GRAY, PRIMARY } from '../colors';
import EmptyList from '../components/EmptyList';
import InputFAB from '../components/InputFAB';
import List from '../components/List';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [todos, setTodos] = useState([]);
  const onInsert = (task) => {
    const id = Date.now.toString();
    setTodos((prev) => [{ id, task, isDone: false }, ...prev]);
  };

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? <List data={todos} /> : <EmptyList />}
      <InputFAB onInsert={onInsert} />
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
