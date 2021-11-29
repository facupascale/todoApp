import React from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function ModalState(props) {

    const { modalVisible, buttonLeftFunction, buttonRightFunction, buttonLeftText, buttonRightText, setModalVisible, modalTitle} = props

    const handlerLeftFunction = () => {
        buttonLeftFunction(modalVisible.taskId)
        setModalVisible({...modalVisible, visible: false})
    }
    const handlerRightFunction = () => {
        buttonRightFunction(modalVisible.taskId)
        setModalVisible({...modalVisible, visible: false})
    }
    return (
        <Modal visible={modalVisible.visible} onRequestClose={() => setModalVisible({...modalVisible, visible: false, taskId: null})} transparent={true} animationType="fade">
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.modalTitle}>{modalTitle}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => handlerLeftFunction()} style={[styles.button, {backgroundColor: '#ff6961'}]}>
                            <Text style={styles.textButton}>{buttonLeftText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlerRightFunction()} style={[styles.button, {backgroundColor: '#8abadd'}]}>
                            <Text style={styles.textButton}>{buttonRightText}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => setModalVisible({...modalVisible, visible: false, taskId: null})} style={[styles.button, {backgroundColor: '#bf9bde', width: '75%', height: '20%', marginTop: '5%'}]}> 
                        <Text style={styles.textButton}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    contentContainer: {
        backgroundColor: 'white',
        width: '80%',
        height: '30%',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalTitle: {
        color: 'grey',
        marginTop: '15%',
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        height: '15%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: '20%'
    },
    button: {
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})