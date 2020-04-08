

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
    .initializeApp(
        {
            apiKey: "AIzaSyB0-b6UBPc2CYuBdKy0yrGSs2z7YLKcmGI",
            authDomain: "learnlabapp.firebaseapp.com",
            databaseURL: "https://learnlabapp.firebaseio.com",
            projectId: "learnlabapp",
            storageBucket: "learnlabapp.appspot.com",
            messagingSenderId: "914023575759",
            appId: "1:914023575759:web:313baa22cb154a097bc7ba"
        }
    )
    .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }