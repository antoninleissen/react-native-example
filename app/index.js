import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Accueil from '../component/Accueil.js'
import Profil from "../component/Profil";

const Routes = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="accueil" navigationBarStyle={{ display: 'none' }} component={Accueil} title='Accueil' />
                <Scene key="profil" component={Profil} title='Profil' />
            </Scene>
        </Router>
    )

}


export default Routes