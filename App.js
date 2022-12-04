import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { useState } from 'react';

export default function App() {
  const [modalIsVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function endAddGoalHandler() {
    setModalVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
      text: enteredGoalText,
      id: Math.random().toString()
    }])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }


  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
        {modalIsVisible ?
          <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} hide={endAddGoalHandler} />
          : ''}
        <View style={styles.goalsContainer}>
          <FlatList keyExtractor={(item, index) => {
            return item.id;
          }} data={courseGoals} renderItem={(itemData) => {
            return <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDelete={deleteGoalHandler} />;
          }} >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e0458'
  },
  goalsContainer: {
    flex: 6
  }
});
