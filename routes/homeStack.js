import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import pictureRandom from '../screens/pictureRandom'

const screens = {
    Home: {
        screen: Home
    },

    pictureRandom: {
        screen: pictureRandom
    },




}

const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack);
