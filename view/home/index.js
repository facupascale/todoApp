import React, {useState} from 'react'
import {TextInput, View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import ListTasks from '../../components/listTasks'
import {useTaskContext} from '../../context'

export default function Home() {
  const [taskName, setTaskName] = useState('')
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState(null)
  const {addTask, newTaskList} = useTaskContext()
  
  const handlerOnChange = (text) => {
    setTaskName(text)
  }

  const handlerAddTask = () => {
    addTask({id: Math.floor(Math.random()*101), name: taskName, state: false})
    setTaskName('')
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1}}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputErrorContainer}>
          <TextInput 
            placeholder={'Add a task...'} 
            placeholderTextColor={'grey'} 
            color={'black'} 
            defaultValue={taskName} 
            onBlur={() => taskName.length > 0 ? setError(null) : setError('You cant add an empty task ')} 
            onChangeText={(text) => handlerOnChange(text)} 
            style={styles.input} />
            {error 
            ? <Text style={{ color: '#ff6961' }}>{error}</Text> 
            : null
            }
          </View>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: error ? 'grey' : '#bf9bde'}]} 
            disabled={taskName.length > 0 ? false : true} 
            onPress={() => handlerAddTask()}
          >
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={{ width: '33%', alignItems: 'center'}} onPress={() => setFilter(null)}>
            <Text style={{ color: filter == null ? '#bf9bde' : 'grey', fontWeight: 'bold'}}>All tasks</Text>
          </TouchableOpacity >
          <TouchableOpacity style={{ width: '33%', alignItems: 'center'}} onPress={() => setFilter(false)}>
            <Text style={{ color: filter == false ? '#bf9bde' : 'grey', fontWeight: 'bold'}}>Incomplete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', alignItems: 'center'}} onPress={() => setFilter(true)}>
            <Text style={{ color: filter == true ? '#bf9bde' : 'grey', fontWeight: 'bold'}}>Complete</Text>
          </TouchableOpacity>
        </View>
        <ListTasks filterData={filter}/>
        <TouchableOpacity 
          onPress={() => newTaskList()} 
          style={styles.buttonClean}
        >
          <Text style={[styles.textButton, { fontWeight: 'bold'}]}>Clean all tasks</Text>
        </TouchableOpacity>
      </View >
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
  inputErrorContainer: {
    width: '60%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  input: {
    width: '100%',
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
    minHeight: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  filterContainer: {
    width: '90%', 
    height: '5%', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    flexDirection: 'row', 
    alignSelf: 'center',
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
  buttonClean: {
    backgroundColor: '#ff6961',
    width: '90%',
    height: '5%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '3%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
