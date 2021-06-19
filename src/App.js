import './App.css';
import HomePage  from './components/pages/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInUp from './components/pages/sign-in-and-up/sign-in-and-up.component'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInUp}></Route>
        </Switch>
      </BrowserRouter>  
    </div>
    
    
  );
}

export default App;
