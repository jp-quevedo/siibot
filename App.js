import { useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'

import AddTaxEvent from './src/components/AddTaxEvent'
import CalendarContainer from './src/components/CalendarContainer'
import MenuContainer from './src/components/MenuContainer'
import TaxEventListContainer from './src/components/TaxEventListContainer'

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
  const [taxEventSelected, setTaxEventSelected] = useState({})
  const [updateTaxEvent, setUpdateTaxEvent] = useState({})

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

  const onHandleModal = (item) => {
    setTaxEventSelected(item)
    setModalVisible(!modalVisible)
  }

  const deleteTaxEvent = () => {
    setTaxEventList(taxEventList.filter(item => item.id != taxEventSelected.id))
    setModalVisible(!modalVisible)
  }

  const saveUpdateTaxEvent = (taxEventSelected) => {
    setTaxEventList(taxEventList.map(event => {
      if(event.id === taxEventSelected.id) {
        return ({...taxEventSelected})
      }
    }))
    setModalVisible(!modalVisible)
  }

  const onHandleUpdateName = (input) => {
    setTaxEventSelected({...taxEventSelected, name: input})
  }

  const onHandleUpdateAmount = (input) => {
    setTaxEventSelected({...taxEventSelected, amount: input})
  }

  const updatePaidStatus = (id) => {
    setTaxEventList(taxEventList.map(item => {
      if(item.id === id) {
        return ({
          ...item,...{paid: !item.paid}
        })}
        return item
    }))
  }

  return (
    <View style={styles.appContainer}>
      <CalendarContainer />
      <AddTaxEvent
        onHandleAddName={onHandleAddName}
        onHandleAddAmount={onHandleAddAmount}
        newTaxEvent={newTaxEvent}
        addTaxEvent={addTaxEvent}
      />
      <TaxEventListContainer
        taxEventList={taxEventList}
        onHandleModal={onHandleModal}

        modalVisible={modalVisible}
        taxEventSelected={taxEventSelected}
        deleteTaxEvent={deleteTaxEvent}
        saveUpdateTaxEvent={saveUpdateTaxEvent}
        updatePaidStatus={updatePaidStatus}
        onHandleUpdateName={onHandleUpdateName}
        onHandleUpdateAmount={onHandleUpdateAmount}
      />
      <MenuContainer />
    </View>
  )
}

const styles = StyleSheet.create({

  appContainer: {
    alignItems: 'center',
    backgroundColor: '#000000',
    flex: 10,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },

})