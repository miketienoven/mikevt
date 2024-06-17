import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const TaskList = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Text>TaskList</Text>
      </ScrollView>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 800,
    width: 400,
    top: 100
  }
})