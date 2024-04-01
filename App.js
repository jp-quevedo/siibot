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

// logica cart suscripciones
// eliminar, exportar declaracion
// actualizar datos de contacto
// darle funcionalidad a historial y preferencias

// {
//   "cli": {
//     "version": ">= 7.6.2"
//   },
//   "build": {
//     "development": {
//       "developmentClient": true,
//       "distribution": "internal"
//     },
//     "preview": {
//       "distribution": "internal"
//     },
//     "production": {}
//   },
//   "submit": {
//     "production": {}
//   }
// }

// {
//   "build": {
//     "preview": {
//       "android": {
//         "buildType": "apk"
//       }
//     },
//     "preview2": {
//       "android": {
//         "gradleCommand": ":app:assembleRelease"
//       }
//     },
//     "preview3": {
//       "developmentClient": true
//     },
//     "production": {}
//   }
// }