import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import firebase from './database/firebasedb'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { BrowserRouter } from 'react-router-dom'
import { createFirestoreInstance } from 'redux-firestore'
import AuthIsReady from 'AuthIsReady'

import App from 'App'
import { store, adminAuthDatabase } from './database/createAdminStore'
import { dataProvider, history } from './pages/admin/AdminPage'
import authProvider from './pages/admin/authProvider'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.render(
  <Provider store={adminAuthDatabase(authProvider, dataProvider, history)}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      createFirestoreInstance={createFirestoreInstance}
      dispatch={store.dispatch}
      config={{
        useFirestoreForProfile: true,
        userProfile: 'users',
      }}
    >
      <ParallaxProvider>
        <AuthIsReady>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthIsReady>
      </ParallaxProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
)
