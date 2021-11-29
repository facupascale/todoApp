import React, { useState } from 'react'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import {useTaskContext} from '../../context'
import Modal from '../modal'

export default function ListTasks(props) {
  const { filterData } = props
  const {task, deleteTask, updateStateComplete, updateStateIncomplete} = useTaskContext()
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    taskId: null
  })
  const handlerChangeState = (id) => {
    setModalVisible({...modalVisible, visible: true, taskId: id})
  }

  const dataFilter = filterData !== null ? task.filter(item => item.state === filterData) : task

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
      <Modal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        buttonLeftFunction={updateStateIncomplete}
        buttonLeftText={'Incomplete'}
        buttonRightFunction={updateStateComplete}
        buttonRightText={'Complete'}
        modalTitle={'Which is the state of this task ?'}
      />
      {task.length > 0 ? dataFilter.map((item) => 
        <View style={styles.taskContainer}>
          <View style={styles.textTaskContainer}>
            <Text style={[styles.textTask, { 
              fontStyle: item.state === true ? 'italic' : 'normal', 
              textDecorationLine: item.state === true ? 'line-through' : 'none'
            }]}> {item.name} </Text>
            <Text style={{ color: 'grey' }}>state: {item.state === false ? 'Incomplete' : 'Complete'}</Text>
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.updateButton} onPress={() => handlerChangeState(item.id)}>
              <Text style={[styles.textDelete, { fontSize: 12}]}>Update state</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={() => deleteTask(item.id)}>
              <Text style={styles.textDelete}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
        : <Text style={styles.textNoTask}> No hay tareas... </Text>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center', 
    flex: 1
  },
  taskContainer: {
    backgroundColor: 'white',
    width: '90%', 
    minHeight: '7%', 
    maxHeight: '10%', 
    marginTop: '3%', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTaskContainer: {
    width: '55%', 
    height: '90%', 
    marginLeft: '2%', 
    justifyContent: 'center', 
    alignSelf: 'center'
  },
  textTask: {
    color: 'black', 
    fontSize: 16, 
    textAlignVertical: 'center', 
    textAlign: 'left',
  },
  containerButtons: {
    flexDirection: 'row',
    width: '40%',
    height: '100%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center'
  },  
  buttonDelete: {
    backgroundColor: '#ff6961', 
    width: '40%', 
    height: '80%', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textDelete: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  updateButton: {
    backgroundColor: '#8abadd',
    width: '40%',
    height: '80%',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNoTask: { 
    color: 'grey', 
    fontSize: 16, 
    fontWeight: 'bold', 
    alignSelf: 'center', 
    marginTop: '5%'}
}) 
