import { useState } from 'react'
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator }from '@react-navigation/native-stack'

import Home from './src/screens/Home'
import ItemContainer from './src/screens/ItemContainer'
import ItemListContainer from './src/screens/ItemListContainer'
import MenuContainer from './src/components/MenuContainer'

import colors from './src/utils/globals/colors'
import { fontCollection } from './src/utils/globals/fonts'

const Stack = createNativeStackNavigator()

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState('')
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

  const windowWidth = Dimensions.get('window').width

  const [fontsLoaded] = useFonts(fontCollection)
  if (!fontsLoaded) {
    return null
  }

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectedItemState = (id) => {
    setItemSelected(id)
  }

  return (
    <>
      <StatusBar backgroundColor={colors.container} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.appContainer}>
        <View style={styles.app}>
          {
            categorySelected
              ? itemSelected
                ? <ItemContainer
                  itemSelected={itemSelected}
                  windowWidth={windowWidth}
                  // modal
                  modalVisible={modalVisible}
                  setItemSelected={setItemSelected}
                  setModalVisible={setModalVisible}
                />
                  : <ItemListContainer
                      categorySelected={categorySelected}
                      selectedItemState={selectedItemState}
                      windowWidth={windowWidth}
                      // event container
                      itemList={itemList}
                      newItem={newItem}
                      setItemList={setItemList}
                      setNewItem={setNewItem}
                  />
                : <Home
                    windowWidth={windowWidth}
                    selectedCategoryState={selectedCategoryState}
                />
          }
        </View>
        <View style={styles.menu}>
          <MenuContainer
            windowWidth={windowWidth}
          />
        </View>
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  appContainer:{
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  app:{
    flex: 9,
  },
  menu:{
    maxHeight: 80,
    flex: 1,
  }
})