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

// renderizar lista de items en tiempo real (eventos y declaraciones)
// usar datos de user para declaraciones y visualizaciones en el perfil
// logica cart suscripciones