import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BLACK, DANGER, PRIMARY } from '../colors';

const ListItem = memo(({ item }) => {
  const checkboxProps = {
    name: item.isDone ? 'checkbox-marked' : 'checkbox-blank-outline',
    color: item.isDone ? PRIMARY.DEFAULT : BLACK,
    size: 20,
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}} hitSlop={10}>
        <MaterialCommunityIcons {...checkboxProps} />
      </Pressable>
      <View style={styles.task}>
        <Text>{item.task}</Text>
      </View>
      <Pressable onPress={() => {}} hitSlop={10}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={DANGER.DEFAULT}
        />
      </Pressable>
    </View>
  );
});

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  task: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default ListItem;
