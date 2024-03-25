import {
  StatusBar,
} from 'react-native'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'

import { store } from './src/app/store'
import { fontCollection } from './src/utils/globals/fonts'
import Navigator from './src/navigation/Navigator'
import colors from './src/utils/globals/colors'

export default function App() {

  const [ fontsLoaded ] = useFonts(fontCollection)
  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar backgroundColor = { colors.container } />
      <Provider store = { store }>
        <Navigator />
      </Provider>
    </>
  )
}

// eventos y declaraciones
// renderizar lista de items en tiempo real

// logica cart
// segunda mitad clase 15 en adelante