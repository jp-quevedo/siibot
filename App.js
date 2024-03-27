import {
  StatusBar,
} from 'react-native'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'

import { fontCollection } from './src/utils/globals/fonts'
import { init } from './src/utils/db'
import { store } from './src/app/store'
import Navigator from './src/navigation/Navigator'
import colors from './src/utils/globals/colors'

init()

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
// alternativa a flatlist para items de una declaracion
// agregar datos demograficos user a order

// logica cart
// segunda mitad clase 15 en adelante