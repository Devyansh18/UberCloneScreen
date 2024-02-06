// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }} // This hides the header
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }























// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// import UberScreen from "./src/screens/UberScreen";

// const navigator = createStackNavigator(
//   {
//    Uber : UberScreen,
//   },
//   {
//     initialRouteName: 'Uber', 
//     defaultNavigationOptions: {
//       title : 'Uber',
//       headerShown : false,
//       headerTitleStyle : {
//         fontSize : 35,
//         marginHorizontal: 20,
//         marginTop: 15,
//         fontWeight: 'bold'
//       }
//     },
//   }
// );
// export default createAppContainer(navigator);








import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UberScreen from "./src/screens/UberScreen";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen
       name = "Uber"
       component = {UberScreen}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
