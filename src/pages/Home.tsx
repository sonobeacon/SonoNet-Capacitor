import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent
} from '@ionic/react';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Welcome to Home Page</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    }
}

export default Home