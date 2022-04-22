const initialAuth = {
  loginError: '',
  loginSuccess: '',
  logout: '',
  signupSuccess: '',
  signupError: '',
  passResetSuccessMessage: '',
  passResetErrorMessage: '',
  passError: '',
  userData: [],
  profileErrorMessage: '',
  profileSuccessMessage: '',
  passwordSuccessMessage: '',
  passwordErrorMessage: '',
}

export const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case 'PROFILE_UPLOAD_SUCCESS':
      return {
        ...state,
        profileSuccessMessage: action.message,
      }
    case 'PROFILE_UPLOAD_ERROR':
      return {
        ...state,
        profileErrorMessage: action.message,
      }
    case 'PASSWORD_UPDATE_SUCCESS':
      return {
        ...state,
        passwordSuccessMessage: action.message,
      }
    case 'PASSWORD_UPDATE_ERROR':
      return {
        ...state,
        passwordErrorMessage: action.message,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginSuccess: action.message,
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: action.message,
      }
    case 'LOGOUT':
      return {
        ...state,
        logout: 'logout Success',
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signupSuccess: action.message,
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        signupError: action.message,
      }
    case 'PASSRESET_SUCCESS':
      return {
        ...state,
        passResetSuccessMessage: 'A password reset email has been sent to you',
      }
    case 'PASSRESET_ERROR':
      return {
        ...state,
        passResetErrorMessage: action.message,
      }

    default:
      return state
  }
}
