import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import TaskItem from './TaskItem'

const colorScheme = useColorScheme();

const TaskList = () => {
  return (
    <ScrollView style={styles.container}>
     <TaskItem />
     <TaskItem />
     <TaskItem />
    </ScrollView>
  )
}

export default TaskList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    width: 400,
    marginTop: 60,
    backgroundColor: colorScheme === 'dark' ? '#242628' : '#F1F8FF',
    marginHorizontal: 30,
  }
})