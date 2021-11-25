import React from 'react'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'

export default function ListTasks({tasks, setTasks}) {

  return (
    <ScrollView>
      {tasks.length ? tasks.map(item => {
        <View>
          <Text> </Text>
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
        </View>
      })
        : <Text> No hay tareas... </Text>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})
