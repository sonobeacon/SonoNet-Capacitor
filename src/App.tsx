import React, { Component } from 'react';
import { IonApp } from '@ionic/react';
import './App.css';
import Routes from './routes';

class App extends Component {

  render() {
    return <IonApp>
      <Routes />
    </IonApp>
  }
}

export default App