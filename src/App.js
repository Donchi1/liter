import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import Sidebar from 'components/Sidebar'
import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'
import History from 'pages/History'
import Home from 'pages/main/Home'
import About from 'pages/main/About'
import Login from 'pages/main/Login'
import Register from 'pages/main/Register'
import Pricing from 'pages/main/Pricing'
import Contact from 'pages/main/Contact'
import Features from 'pages/main/Features'
import Teams from 'pages/main/MyTeams'
import PasswordReset from 'pages/main/PasswordReset'
import Payments from 'pages/Payments'
import Withdrawals from 'pages/Withdrawals'
import Footer from 'components/Footer'
import AdminPage from 'pages/admin/AdminPage'
import Empty from './pages/main/Empty'
import Plans from './pages/Plans'
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css'
import NavBar from 'pages/main/NavBar'

function App() {
  const authState = useSelector((state) => state.firebase.auth)
  return (
    <>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>

        <Route exact path="/about">
          <NavBar />
          <About />
        </Route>
        <Route exact path="/contact">
          <NavBar />
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/feature">
          <NavBar />
          <Features />
        </Route>
        <Route exact path="/team">
          <NavBar />
          <Teams />
        </Route>
        <Route exact path="/pricing">
          <NavBar />
          <Pricing />
        </Route>
        <Route exact path="/reset">
          <PasswordReset />
        </Route>

        <Route
          exact
          path="/user/dashboard"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <Dashboard />
                    <Footer />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>
        <Route exact path="/adm" component={AdminPage}></Route>
        <Route
          exact
          path="/user/withdrawals"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <Withdrawals />
                    <Footer />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>
        <Route
          exact
          path="/user/profile"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <Profile />
                    <Footer />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>
        <Route
          exact
          path="/user/user/profile"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <Profile />
                    <Footer />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>
        <Route
          exact
          path="/user/history"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <History />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>
        <Route
          exact
          path="/user/plans"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <Plans />
                    <Footer />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>

        <Route
          exact
          path="/user/payments"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return (
                <>
                  <Sidebar />
                  <div className="md:ml-56">
                    <Payments />
                    <Footer />
                  </div>
                </>
              )
            } else {
              return <Redirect to="/login" />
            }
          }}
        ></Route>

        <Route exact to="/Empty" component={Empty} />
      </Switch>
    </>
  )
}

export default App
