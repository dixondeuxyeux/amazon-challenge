import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Checkout from './Checkout'
import Payment from './Payment'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51IqIfPA8aPbaxRBH4yf2Fw9o24QI5z9XQLmW77DUFP2wlFa3z6DteCV2v5J8yNXtJBMqpo81LTFPAKZW5RUDs7gc00PoizXDlp'
)
function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app loads
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
