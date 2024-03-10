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

// ruta cart: perfil > plan
// redux implementado para eventos (items) creados por el usuario (lógica de creación pendiente de actualizar según persistencia)
// ruta balance reutiliza componente de itemlist el cual aplica filtro por categoría

// trabajar como cart la lógica de eventos crud por cliente 

// ordenar lógica de datos de usuario en firebase