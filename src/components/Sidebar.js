import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Icon from '@material-tailwind/react/Icon'
import H6 from '@material-tailwind/react/Heading6'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { LogoutAction } from '../State/Actions'

const MySwal = withReactContent(Swal)

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState('-left-60')
  const [accessCodeInfo, setAccessCodeInfo] = useState({
    open: false,
    accessCode: '',
    isSubmitting: false,
  })
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const { pathname } = useLocation()
  const profileInfo = useSelector((state) => state.firebase.profile)

  const withdrawalCheck = () => {
    if (pathname === '/user/withdrawals') {
      return
    }
    if (!profileInfo.totalBalance || profileInfo.totalBalance === '0000') {
      return MySwal.fire({
        title: <p className="text-red-600">No Balance</p>,
        html: <span className="text-red-500">No balance for withdrawal</span>,
        icon: 'error',
        showCloseButton: true,
        closeButtonText: 'Ok',
      })
    }

    if (profileInfo.accessCode === '') {
      return MySwal.fire({
        title: <p className="text-red-500">Access Code Required</p>,
        html: (
          <span className="text-red-500">
            Access code required to further your withdrawal
          </span>
        ),
        icon: 'error',
        showCloseButton: true,

        confirmButtonText: 'Check Or Get One',
      }).then((value) => {
        if (value.isConfirmed) {
          return setAccessCodeInfo({ ...accessCodeInfo, open: true })
        }
      })
    }

    return setAccessCodeInfo({ ...accessCodeInfo, open: true })
  }

  const handleLogout = () => {
    return LogoutAction(firebase, dispatch)
  }
  return (
    <>
      <AdminNavbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setAccessCodeInfo={setAccessCodeInfo}
        accessCodeInfo={accessCodeInfo}
      />
      <div
        className={`h-screen  fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl lg:bg-[#ffffff0d] bg-[#030239]  w-60 z-10 text-white py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="/user/dashboard"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="white">Cryptoguarantee Dashboard</H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-2  hover:bg-[#846ff4] transition-colors text-white ease-linear duration-500">
                <NavLink
                  to="/user/dashboard"
                  className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md"
                >
                  <Icon name="dashboard" size="2xl" />
                  Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-2  hover:bg-[#846ff4] transition-colors text-white ease-linear duration-500">
                <NavLink
                  to="/user/profile"
                  className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md"
                >
                  <Icon name="person" size="2xl" />
                  Profile
                </NavLink>
              </li>

              <li className="rounded-lg mb-2  hover:bg-[#846ff4] transition-colors ease-linear duration-500">
                <NavLink
                  to="/user/plans"
                  className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md"
                >
                  <Icon name="toc" size="2xl" />
                  Plans
                </NavLink>
              </li>
              <li className="rounded-lg mb-2  hover:bg-[#846ff4] transition-colors ease-linear duration-500">
                <NavLink
                  to="/user/history"
                  className="flex items-center  gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md"
                >
                  <Icon name="group" size="2xl" />
                  History
                </NavLink>
              </li>

              <li className="rounded-lg mb-2  hover:bg-[#846ff4] transition-colors ease-linear duration-500">
                <NavLink
                  to="#"
                  onClick={withdrawalCheck}
                  className="flex items-center focus:text-white  gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                  activeClassName={`${
                    pathname === '/user/withdrawals'
                      ? 'bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md'
                      : 'text-white '
                  }`}
                >
                  <Icon name="list_alt" size="2xl" />
                  Withdrawals
                </NavLink>
              </li>
              <li className="rounded-lg mb-2  hover:bg-[#846ff4] transition-colors ease-linear duration-500">
                <NavLink
                  to="/user/payments"
                  className="flex items-center  gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md"
                >
                  <Icon name="money" size="2xl" />
                  Payments
                </NavLink>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li ClassName="bg-gradient-to-tr from-[#846ff4] to-[#f17674] text-white shadow-md rounded-lg">
                <Link
                  className="flex items-center gap-4 text-lg font-light py-3"
                  to="#"
                  onClick={handleLogout}
                >
                  <Icon name="description" size="2xl" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
