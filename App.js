const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Survey from "./screens/Survey";
import Notif from "./screens/Notif";
import Apply from "./screens/Apply";
import Successful from "./screens/Successful";
import References3 from "./screens/References3";
import References1 from "./screens/References1";
import SpousesInfo2 from "./screens/SpousesInfo2";
import SpousesInfo1 from "./screens/SpousesInfo1";
import ListOfRequirements from "./screens/ListOfRequirements";
import EmpBusinessInfo from "./screens/EmpBusinessInfo";
import PersonalInfo3 from "./screens/PersonalInfo3";
import PersonalInfo2 from "./screens/PersonalInfo2";
import Active from "./screens/Active";
import Profile from "./screens/Profile";
import Credit from "./screens/Credit";
import Shares from "./screens/Shares";
import Welcome from "./screens/Welcome";
import Total from "./screens/Total";
import Loans from "./screens/Loans";
import Home from "./screens/Home";
import Login from "./screens/Login";
import PersonalInfo1 from "./screens/PersonalInfo1";
import Start from "./screens/Start";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Survey"
              component={Survey}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notif"
              component={Notif}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Apply"
              component={Apply}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Successful"
              component={Successful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="References3"
              component={References3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="References1"
              component={References1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpousesInfo2"
              component={SpousesInfo2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpousesInfo1"
              component={SpousesInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListOfRequirements"
              component={ListOfRequirements}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmpBusinessInfo"
              component={EmpBusinessInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo3"
              component={PersonalInfo3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo2"
              component={PersonalInfo2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Active"
              component={Active}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Credit"
              component={Credit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Shares"
              component={Shares}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Total"
              component={Total}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loans"
              component={Loans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInfo1"
              component={PersonalInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
