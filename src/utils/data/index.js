import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from './database'

export const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
}
   
export const app = initializeApp(firebaseConfig)

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})
export const db = getFirestore(app)