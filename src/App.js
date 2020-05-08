import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header-component/header-component.component';
import LoginPage from './pages/login/login-page.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import './App.scss';
import { setCurrentUser } from './redux/user/user-action';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
        if(user) {
            const userRef = await createUserProfileDocument(user);
            userRef.onSnapshot( snapShot => {
                this.props.setCurrentUser({
                  id : snapShot.id,
                  ...snapShot.data()
              });
            });
        } else {
            this.props.setCurrentUser(null);
        }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component = { HomePage } ></Route>
          <Route path='/shop' component= { ShopPage } ></Route>
          <Route path='/checkout' component = { CheckoutPage } ></Route>
          <Route exact path='/login' render = { () => this.props.currentUser? (<Redirect to = '/' />): (<LoginPage/>) } ></Route>
        </Switch>
      </div>
    );
  }
}
 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user =>  dispatch(setCurrentUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
