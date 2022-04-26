import axios from 'axios'

export const registerAction = (data, firebase, dispatch, setuserData) => {
  const email = data.email
  const password = data.password1

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return firebase
        .firestore()
        .collection('users')
        .doc(user.user.uid)
        .set({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          country: data.country,
          state: data.state,
          occupation: data.occupation,
          accessCode: '',
          accessCodeProve: '',
          city: '',
          aboutMe: '',
          profit: '',
          zipCode: '',
          uid: user.user.uid,
          photo: '',
          totalBalance: '0000',
          initialDeposite: '0000',
          bonus: '30.00',
          disbleWithdrawal: true,
        })
        .then(() => {
          firebase
            .storage()
            .ref('users')
            .child(user.user.uid)
            .put(data.photo)
            .then(() => {
              firebase
                .storage()
                .ref(`users/${user.user.uid}`)
                .getDownloadURL()
                .then((url) => {
                  firebase
                    .firestore()
                    .collection('users')
                    .doc(user.user.uid)
                    .update({ photo: url })
                    .then(() => {
                      setuserData({
                        ...data,
                        firstname: '',
                        lastname: '',
                        email: '',
                        password1: '',
                        password2: '',
                        phone: '',
                        country: '',
                        photo: '',
                        state: '',
                        occupation: '',
                        textChange: 'Sign Up',
                      })
                      dispatch({
                        type: 'SIGNUP_SUCCESS',
                        message: 'Registration successful',
                      })
                      axios
                        .post(`${process.env.REACT_APP_APIURL}/welcome`, user)
                        .then(() => {
                          console.log('Sent')
                        })
                    })
                    .catch((err) => {
                      setuserData({
                        ...data,
                        firstname: '',
                        lastname: '',
                        email: '',
                        password1: '',
                        password2: '',
                        phone: '',
                        country: '',
                        photo: '',
                        state: '',
                        occupation: '',
                        textChange: 'Sign Up',
                      })
                      dispatch({ type: 'SIGNUP_ERROR', message: err })
                    })
                })
            })
        })
        .catch((err) => {
          setuserData({
            ...data,
            firstname: '',
            lastname: '',
            email: '',
            password1: '',
            password2: '',
            phone: '',
            country: '',
            photo: '',
            state: '',
            occupation: '',
            textChange: 'Sign Up',
          })
          dispatch({ type: 'SIGNUP_ERROR', message: err })
        })
    })
    .catch((err) => {
      setuserData({
        ...data,
        firstname: '',
        lastname: '',
        email: '',
        password1: '',
        password2: '',
        phone: '',
        country: '',
        state: '',
        occupation: '',
        photo: '',
        textChange: 'Sign Up',
      })
      return dispatch({ type: 'SIGNUP_ERROR', message: err })
    })
}

export const loginAction = (data, firebase, dispatch, setuserData) => {
  const email = data.email
  const password = data.password1

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      setuserData({ ...data, email: '', password1: '', textChange: 'Login' })
      dispatch({ type: 'LOGIN_SUCCESS', message: 'Your login was successful' })
    })
    .catch((err) => {
      setuserData({ ...data, email: '', password1: '', textChange: 'Login' })

      dispatch({ type: 'LOGIN_ERROR', message: err.message })
    })
}

export const forgetAction = (dispatch, firebase, email, setCreds) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      axios
        .post(`${process.env.REACT_APP_APIURL}/api/passwordReset`, email)
        .then(() => {
          dispatch({ type: 'PASSRESET_SUCCESS' })

          return setCreds('')
        })
        .catch((error) => console.log(error.response.data.message))
    })
    .catch((error) => {
      dispatch({ type: 'PASSRESET_ERROR', error: error.message })

      setCreds('')
    })
}

export const updateProfileAction = (profile, firebase, dispatch, setForm) => {
  const uid = firebase.auth().currentUser.uid
  const userInitial = profile.firstname[0] + profile.lastname[0]

  firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .update({
      firstname: profile.firstname,
      lastname: profile.lastname,
      country: profile.country,
      phone: profile.phone,
      occupation: profile.occupation,
      address: profile.address,
      state: profile.state,
      city: profile.city,
      email: profile.email,
      postalCode: profile.postalCode,
      aboutMe: profile.aboutMe,
      initial: userInitial.toString(),
    })
    .then(() => {
      if (profile.img) {
        return firebase
          .storage()
          .ref('users')
          .child(uid)
          .put(profile.img)
          .then(() =>
            firebase
              .storage()
              .ref(`users/${uid}`)
              .getDownloadURL()
              .then((imgUrl) => {
                firebase
                  .firestore()
                  .collection('users')
                  .doc(uid)
                  .update({ photo: imgUrl })
                  .then(() => {
                    axios
                      .post(
                        `${process.env.REACT_APP_APIURL}/api/profileUpdate`,
                        profile,
                      )
                      .then(() => {
                        dispatch({
                          type: 'PROFILE_UPLOAD_SUCCESS',
                          message: 'Profile Successfully Updated',
                        })
                        return setForm({
                          ...profile,

                          isSubmitting: false,
                        })
                      })
                      .catch((error) => {
                        dispatch({
                          type: 'PROFILE_UPLOAD_SUCCESS',
                          message:
                            'Profile Successfully Updated.We couldnt proccess an email notification please check your email address',
                        })
                        return setForm({
                          ...profile,

                          isSubmitting: false,
                        })
                      })
                  })
              }),
          )
      } else {
        dispatch({
          type: 'PROFILE_UPLOAD_SUCCESS',
          message: 'Profile Successfully Updated',
        })

        return setForm({
          ...profile,

          profileIsSubmitting: false,
        })
        //return axios
        //  .post(
        //    `${process.env.REACT_APP_URL}/api/profileUpdate`,
        //    firebase.auth().currentUser.uid,
        //  )
        //  .then((res) => {})
      }
    })
    .catch(() => {
      dispatch({
        type: 'PROFILE_UPLOAD_ERROR',
        message: 'Action could not nbe completed.',
      })
      setForm({
        ...profile,

        profileIsSubmitting: false,
      })
    })
}
export const passwordUpdate = (
  userInfo,
  values,
  setForm,
  dispatch,
  firebase,
) => {
  const user = firebase.auth().currentUser
  firebase
    .auth()
    .currentUser.updatePassword(values.newpassword)
    .then(() => {
      axios
        .post(`${process.env.REACT_APP_APIURL}/api/passwordUpdate`, userInfo)
        .then(() => {
          dispatch({
            type: 'PASSWORD_UPDATE_SUCCESS',
            message: 'Your password is successfully updated',
          })

          return setForm({
            ...values,
            newpassword: '',
            oldpassword1: '',
            passIsSubmitting: false,
          })
        })
        .catch((error) => {
          dispatch({
            type: 'PASSWORD_UPDATE_SUCCESS',
            message:
              'Your password is successfully updated.We couldnt proccess an email notification please check your email address.',
          })

          return setForm({
            ...values,
            newpassword: '',
            oldpassword1: '',
            passIsSubmitting: false,
          })
        })
    })
}
export const withdrawalAction = (
  profile,
  withdrawalData,
  firebase,
  dispatch,

  setWithdrawalData,
) => {
  const uid = firebase.auth().currentUser.uid

  const firestore = firebase.firestore()
  firestore
    .collection('withdrawals')
    .doc(uid)
    .collection('withdrawalDatas')
    .add({
      withdrawalAmount: withdrawalData.amount,
      wallet: withdrawalData.wallet,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      currentUserfirstname: profile.firstname,
      currentUserlastname: profile.lastname,
      withdrawerName: withdrawalData.name,
      number: withdrawalData.phone,
      AccountNumber: withdrawalData.accountNumber,
      uid: uid,
      idx: Math.random().toString(),
      statusPending: true,
      statusFailed: false,
      statusSuccess: false,
    })
    .then(() => {
      axios
        .post(`${process.env.REACT_APP_APIURL}/api/withdrawal`, profile)
        .then(() => {
          dispatch({
            type: 'WITHDRAWAL_SUCCESS',
            message:
              'Please wait for less then 24 hour for withdrawal verification.',
          })
          return setWithdrawalData({
            ...withdrawalData,
            name: '',
            amount: 1,
            wallet: '',
            phone: '',
            accountNumber: '',
          })
        })
        .catch((error) => {
          dispatch({
            type: 'WITHDRAWAL_SUCCESS',
            message:
              'Please wait for less then 24 hour for withdrawal verification. But we couldn"t process an email. check your email address.',
          })
          return setWithdrawalData({
            ...withdrawalData,
            name: '',
            amount: 1,
            wallet: '',
            phone: '',
            accountNumber: '',
          })
        })
    })
    .catch(() => {
      dispatch({
        type: 'WITHDRAWAL_ERROR',
        message: 'Sorry your withdrawal could not be completed',
      })

      setWithdrawalData({
        ...withdrawalData,
        name: '',
        amount: '',
        wallet: '',
        phone: '',
        accountNumber: '',
      })
    })
}

export const paymentAction = (
  paymentData,
  setPaymentData,
  profile,

  firebase,
  dispatch,
) => {
  const uid = firebase.auth().currentUser.uid
  const firestore = firebase.firestore()
  firestore
    .collection('payments')
    .doc(uid)
    .collection('paymentDatas')
    .add({
      paymentAmount: paymentData.amount,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      method: paymentData.method,
      firstname: profile.firstname,
      lastname: profile.lastname,
      uid: uid,
      idx: Math.random().toString(),
      statusPending: true,
      statusFailed: false,
      statusSuccess: false,
    })
    .then(() => {
      firebase
        .storage()
        .ref('paymentProves')
        .child(uid)
        .put(paymentData.prove)
        .then(() => {
          firebase
            .storage()
            .ref(`paymentProves/${uid}`)
            .getDownloadURL()
            .then((url) => {
              firestore
                .collection('users')
                .doc(uid)
                .update({ paymentProve: url })
                .then(() => {
                  axios
                    .post(
                      `${process.env.REACT_APP_APIURL}/api/payment`,
                      profile,
                    )
                    .then(() => {
                      setPaymentData({ ...paymentData, isSubmitting: false })
                      return dispatch({
                        type: 'PAYMENT_SUCCESS',
                        message:
                          'Wait for less than 24hours while we review your payment prove',
                      })
                    })
                    .catch((error) => {
                      setPaymentData({ ...paymentData, isSubmitting: false })
                      return dispatch({
                        type: 'PAYMENT_SUCCESS',
                        message:
                          'Wait for less than 24hours while we review your payment prove. You have a wrong email we couldn"t process a direct email',
                      })
                    })
                })
            })
        })
    })
    .catch((e) => {
      dispatch({ type: 'PAYMENT_ERROR', message: e.message })
    })
}

export const LogoutAction = (firebase, dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.assign('/')
      dispatch({ type: 'LOGOUT' })
    })
}

export const newsLetterAction = (
  email,
  firebase,
  dispatch,
  setinput,
  setopenSnack,
  opensnack,
) => {
  firebase
    .firestore()
    .collection('newsletters')
    .add({
      newsLetter: email,
      id: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      axios
        .post(`${process.env.REACT_APP_APIURL}/api/newsLetter`, email)
        .then((res) => {
          dispatch({ type: 'SUBCRIPTION_SUCCESSFUL' })
          setinput('')
          setopenSnack({
            ...opensnack,
            contactSuccess: false,
            contactError: false,
            subscribeSuccess: true,
            subscribeError: false,
          })
        })
        .catch((err) => {
          dispatch({ type: 'SUBCRIPTION_SUCCESSFUL' })
          setinput('')
          setopenSnack({
            ...opensnack,
            contactSuccess: false,
            contactError: false,
            subscribeSuccess: true,
            subscribeError: false,
          })
        })
    })
    .catch(() => {
      dispatch({ type: 'SUBCRIPTION_ERROR' })
      setinput('')
      setopenSnack({
        ...opensnack,
        contactSuccess: false,
        contactError: false,
        subscribeSuccess: false,
        subscribeError: true,
      })
    })
}

export const contactAction = (
  contactInfo,
  firebase,
  dispatch,
  setContactInfo,
  setopenSnack,
  opensnack,
) => {
  firebase
    .firestore()
    .collection('contacts')
    .add({
      contactName: contactInfo.name,
      contactEmail: contactInfo.email,
      message: contactInfo.message,
      subject: contactInfo.subject,
      id: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      axios
        .post(`${process.env.REACT_APP_APIURL}/api/contact`, contactInfo)
        .then((res) => {
          dispatch({ type: 'MESSAGE_SUCCESS' })
          setContactInfo({
            ...contactInfo,
            name: '',
            email: '',
            message: '',
            subject: '',
            phone: '',
          })
          setopenSnack({
            ...opensnack,
            contactSuccess: true,
            contactError: false,
            subscribeSuccess: false,
            subscribeError: false,
          })
        })
        .catch((err) => {
          dispatch({ type: 'MESSAGE_SUCCESS' })
          setContactInfo({
            ...contactInfo,
            name: '',
            email: '',
            message: '',
            subject: '',
            phone: '',
          })
          setopenSnack({
            ...opensnack,
            contactSuccess: true,
            contactError: false,
            subscribeSuccess: false,
            subscribeError: false,
          })
        })
    })
    .catch(() => {
      dispatch({ type: 'MESSAGE_ERROR' })
      setContactInfo({
        ...contactInfo,
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
      })
      setopenSnack({
        ...opensnack,
        contactSuccess: false,
        contactError: true,
        subscribeSuccess: false,
        subscribeError: false,
      })
    })
}
