import { useState } from 'react'
import {
  Button,
  FlatList,
  Keyboard,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'

export default function App() {

  const [newTaxEvent, setNewTaxEvent] = useState({
    id: '',
    type: '',
    name: '',
    amount: '',
    currency: '',
    date: '',
    paid: '',
  })
  const [taxEventList, setTaxEventList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [taxEventSelected, setTaxEventSelected] = useState('')

  const addTaxEvent = () => {
    setTaxEventList([...taxEventList, newTaxEvent])
    setNewTaxEvent({
      id: '',
      type: '',
      name: '',
      amount: '',
      currency: '',
      date: '',
      paid: '',
    })
    Keyboard.dismiss()
  }

  const onHandleAddName = (input) => {
    setNewTaxEvent({
      ...newTaxEvent,
      name: input,
      id: uuid.v4(),
      type: 'factura',
      currency: 'clp',
      date: new Date().toLocaleString(),
      paid: false,
    })
  }

  const onHandleAddAmount = (input) => {
    setNewTaxEvent({...newTaxEvent, amount: input})
  }

  const onHandleDeleteModal = (id) => {
    setModalVisible(true)
    setTaxEventSelected(id)
  }

  const deleteTaxEvent = () => {
    setTaxEventList(taxEventList.filter(taxEvent => taxEvent.id != taxEventSelected))
    setModalVisible(false)

  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.calendarContainer}>
      </View>

      <View style={styles.taxEventHandleContainer}>
        <TextInput 
          style={styles.textInput}
          maxLength={25}
          placeholder='GLOSA'
          placeholderTextColor='white'
          onChangeText={onHandleAddName}
          value={newTaxEvent.name}
        />
        <TextInput
          style={styles.textInput}
          maxLength={100}
          placeholder='MONTO'
          placeholderTextColor='white'
          onChangeText={onHandleAddAmount}
          value={newTaxEvent.amount}
        />
        <Button title='AGREGAR' onPress={addTaxEvent} />
      </View>

      {/* <ScrollView style={styles.taxEventListContainer}>
        {
          taxEventList.map(item => (
            <View key={item.id} style={styles.taxEventCard}>
              <Text>Glosa: {item.name}</Text>
              <Text>Monto: {item.amount}</Text>
              <Text>Fecha: {item.date}</Text>
              <View style={styles.taxEventButtons}>
                <Button title='EDITAR'/>
                <Button title='BORRAR'/>
              </View>
            </View>
          ))
        }
      </ScrollView> */}

      <View style={styles.taxEventListContainer}>
        <FlatList
          data={taxEventList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.taxEventCard}>
                <Text>Glosa: {item.name}</Text>
                <Text>Monto: {item.amount}</Text>
                <Text>Fecha: {item.date}</Text>
                <Button title='BORRAR' onPress={() => onHandleDeleteModal(item.id)}/>
              </View>
          )}
        />
        <Modal visible={modalVisible}>
            <View>
              <Text>Confirmar</Text>
              <Button title='SI' onPress={deleteTaxEvent} />
              <Button title='NO' onPress={() => setModalVisible(false)} />
            </View>
        </Modal>
      </View>

      <View style={styles.menuContainer}>
        <Button title='INICIO' />
        <Button title='BALANCE' />
        <Button title='DETALLE' />
        <Button title='PERFIL' />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  appContainer: {
    alignItems: 'center',
    backgroundColor: '#6DA5C0',
    flex: 10,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    fontFamily: 'Roboto',
    justifyContent: 'center',
  },

  calendarContainer: {
    flex: 1,
  },

  taxEventHandleContainer: {
    flexDirection: 'column',
    paddingVertical: 30,
    width: '90%'
  },

  textInput: {
    backgroundColor: '#294D61',
    borderColor: '#294D61',
    borderRadius: 10,
    borderWidth: 1,
    color: '#05161A',
    marginBottom: 5,
    padding: 10,
    width: '100%',
  },

  taxEventListContainer: {
    flex: 9,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '90%'
  },

  taxEventCard: {
    borderColor: '#294D61',
    borderRadius: 10,
    borderWidth: 2,
    color: '#05161A',
    gap: 5,
    height: 'auto',
    marginBottom: 5,
    padding: 10,
    width: '100%',
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    width: '95%'
  },

})