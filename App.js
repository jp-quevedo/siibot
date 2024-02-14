import { useState } from 'react'
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'
import { useFonts } from 'expo-font'

import CalendarContainer from './src/components/CalendarContainer'
import EventContainer from './src/components/EventContainer'
import ItemContainer from './src/components/ItemContainer'
import MenuContainer from './src/components/MenuContainer'

import Home from './src/screens/Home'
import ItemListContainer from './src/screens/ItemListContainer'
import ItemDetailContainer from './src/screens/ItemDetailContainer'

import colors from './src/utils/globals/colors'
import { fontCollection } from './src/utils/globals/fonts'

export default function App() {
  
  const [categorySelected, setCategorySelected] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [itemUpdate, setItemUpdate] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [newItem, setNewItem] = useState({
    id: '',
    category: '',
    name: '',
    amount: '',
    date: '',
    paid: '',
  })

  const [fontsLoaded] = useFonts(fontCollection)
  if (!fontsLoaded) {
    return null
  }

  const addItem = () => {
    setItemList([...itemList, newItem])
    setNewItem({
      id: '',
      category: '',
      name: '',
      amount: '',
      date: '',
      paid: '',
    })
    Keyboard.dismiss()
  }

  const deleteItem = () => {
    setItemList(itemList.filter(item => item.id != itemSelected.id))
    setModalVisible(!modalVisible)
  }

  const onHandleAddAmount = (input) => {
    setNewItem({...newItem, amount: input})
  }

  const onHandleAddName = (input) => {
    setNewItem({
      ...newItem,
      id: uuid.v4(),
      category: 'IVA',
      name: input,
      date: new Date().toLocaleString(),
      paid: false,
    })
  }

  const onHandleModal = (item) => {
    setItemSelected(item)
    setModalVisible(!modalVisible)
  }

  const onHandleUpdateAmount = (input) => {
    setItemSelected({...itemSelected, amount: input})
  }

  const onHandleUpdateName = (input) => {
    setItemSelected({...itemSelected, name: input})
  }

  const saveItemUpdate = (itemSelected) => {
    setItemList(itemList.map(item => {
      if(item.id === itemSelected.id) {
        return ({...itemSelected})
      }
    }))
    setModalVisible(!modalVisible)
  }

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const updatePaidStatus = (id) => {
    setItemList(itemList.map(item => {
      if(item.id === id) {
        return ({
          ...item,...{paid: !item.paid}
        })}
        return item
    }))
  }

  const screenWidth = Dimensions.get('window').width

  return (
    <View style={styles.appContainer}>
      <>
        {
          categorySelected
            ? <ItemListContainer 
                categorySelected={categorySelected}
                screenWidth={screenWidth}
            />
            : <Home
                screenWidth={screenWidth}
                selectedCategoryState={selectedCategoryState}
            />
        }
      </>

      {/* <CalendarContainer />
      <EventContainer
        addItem={addItem}
        newItem={newItem}
        onHandleAddAmount={onHandleAddAmount}
        onHandleAddName={onHandleAddName}
        screenWidth={screenWidth}
      />
      <ItemContainer
        itemList={itemList}
        onHandleModal={onHandleModal}
        screenWidth={screenWidth}

        deleteItem={deleteItem}
        itemSelected={itemSelected}
        modalVisible={modalVisible}
        onHandleUpdateAmount={onHandleUpdateAmount}
        onHandleUpdateName={onHandleUpdateName}
        saveItemUpdate={saveItemUpdate}
        updatePaidStatus={updatePaidStatus}
      />
      <MenuContainer
        screenWidth={screenWidth}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({

  appContainer: {
    backgroundColor: colors.background,
    flex: 10,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },

})