import React, {useState} from 'react'
import {TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import ListTasks from '../../components/listTasks'

export default function Home() {

  const [tasks, setTasks] = useState([])


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={'Add a task...'} placeholderTextColor={'grey'} style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}> Hola </Text>
        </TouchableOpacity>
      </View>
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  inputContainer: {
    marginTop: '10%',
    width: '90%',
    height: '10%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  input: {
    width: '60%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: '20%',
    height: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bf9bde',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textButton: {
    fontSize: 16,
    color: 'white'
  }
})
