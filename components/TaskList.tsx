import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import TaskItem from './TaskItem'

const TaskList = () => {
  return (
    <ScrollView style={styles.container}>
     <TaskItem />
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
    backgroundColor: '#F1F8FF',
    marginHorizontal: 30,
  }
})