const initialAuth = {
  paymentError: null,
  paymentSuccess: '',
  withdrawalError: null,
  withdrawalSuccess: null,
  paymentAmount: '',
  qrCodeEth: false,
  qrCodeLit: false,
  qrCodeBtc: false,
  subcriptionSuccess: '',
  subcriptionError: null,
  uploadSuccess: '',
  uploadError: null,
  contactMessageError: null,
  contactMessageSuccess: '',
  withdrawalData: [],
  paymentData: [],
  savingMessageSuccess: '',
  savingMessageError: '',
  savingData: [],
  pwcError: null,
  pwcSuccess: '',
  accessCodeError: null,
  accessCodeSuccess: null,
  notifications: [],
  accessCodeProveSuccess: '',
  accessCodeProveError: '',
  openSuccess: false,
  openError: false,
}

export const projectReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case 'NO_WITHDRAWAL_ACCESS':
      return {
        ...state,
        withdrawalAccessPopUp: action.accessPopUp,
      }
    case 'ACCESS_ERROR':
      return {
        ...state,
        accessCodeError: action.message,
      }
    case 'ACCESS_SUCCESS':
      return {
        ...state,
        accessCodeSuccess: action.message,
      }
    case 'PROVE_SUCCESS':
      return {
        ...state,
        accessCodeProveSuccess: action.message,
      }
    case 'PROVE_ERROR':
      return {
        ...state,
        accessCodeProveSuccess: action.message,
      }

    case 'PAYMENT_SUCCESS':
      return {
        ...state,
        paymentSuccess: action.message,
      }
    case 'PAYMENT_ERROR':
      return {
        ...state,
        paymentError: action.message,
      }

    case 'WITHDRAWAL_ERROR':
      return {
        ...state,
        withdrawalError: action.message,
      }
    case 'WITHDRAWAL_SUCCESS':
      return {
        ...state,
        withdrawalSuccess: action.message,
      }

    case 'SUBCRIPTION_SUCCESS':
      return {
        ...state,
        subcriptionSuccess:
          'Subcription successfull. Thanks for subcribing to our newsletter',
      }
    case 'SUBCRIPTION_ERROR':
      return {
        ...state,
        subcriptionError: action.error.message,
      }
    case 'PAYMENT_SET_BTC':
      return {
        ...state,
        paymentAmountData: action.amount,
        qrCodeBtc: action.qrcode,
        qrCodeEth: false,
        qrCodeLit: false,
      }
    case 'PAYMENT_SET_LIT':
      return {
        ...state,
        paymentAmountData: action.amount,
        qrCodeLit: action.qrcode,
        qrCodeEth: false,
        qrCodeBtc: false,
      }
    case 'PAYMENT_SET_ETH':
      return {
        ...state,
        paymentAmountData: action.amount,
        qrCodeEth: action.qrcode,
        qrCodeLit: false,
        qrCodeBtc: false,
      }
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        uploadSuccess: action.message,
      }
    case 'UPLOAD_ERROR':
      return {
        ...state,
        uploadError: action.message,
      }
    case 'MESSAGE_ERROR':
      return {
        ...state,
        contactMessageError: 'sorry message not sent',
      }
    case 'MESSAGE_SUCCESS':
      return {
        ...state,
        contactMessageSuccess: 'Message was sent successfully',
      }

    default:
      return state
  }
}
