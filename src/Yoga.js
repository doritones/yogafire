import React from 'react';

import Logo from './components/UI/Logo/Logo';
import User from './components/UI/User/User';
import Main from './components/Layout/Main';
import Method from './components/Layout/Method';
import Price from './components/Layout/Price';
import Teacher from './components/Layout/Teacher';
import Imprint from './components/UI/Imprint/Imprint';

class Yoga extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Logo />
        <User text='Usuário' items={['Login', 'Criar conta']} />
        <Main />
        <Method />
        <Price />
        <Teacher />
        <Imprint />
      </React.Fragment>
    )
  }
}

export default Yoga;
