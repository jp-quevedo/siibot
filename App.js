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

// eventos
// renderizar lista de items en tiempo real, generar declaracion

// declaraciones
// primera pantalla ver declaraciones y generar declaracion
// poner fecha
// mapear y filtrar segun fecha
// array nuevo calcular y generar declaracion