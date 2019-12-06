import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../pages/Signin';
import SignUp from '../pages/signup';
import Main from '../pages/main';


const Routes = createStackNavigator({
  SignIn,
  SignUp,
  Main,
});




export default Routes;