import React from 'react'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function AuthIsReady({ children }) {
  const authState = useSelector((state) => state.firebase.auth)

  if (!isLoaded(authState)) {
    return (
      <div className="flex justify-center items-center transform -translate-y-2/4 -translate-x-full">
        <div className="spinner-grow inline-block w-20 h-20 bg-red-400 rounded-full opacity-0">
          <span className="visually-hidden">loading...</span>
        </div>
      </div>
    )
  } else {
    return children
  }
}

export default AuthIsReady
