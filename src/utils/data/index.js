import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

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

export const auth = getAuth(app)
export const db = getFirestore(app)