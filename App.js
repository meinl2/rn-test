import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from "./src/screens/AuthScreen";
import SwiperScreen from "./src/screens/SwiperScreen";
import TotalScreen from "./src/screens/TotalScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Auth" component={AuthScreen}/>
                <Stack.Screen name="Swiper" component={SwiperScreen}/>
                <Stack.Screen options={{gestureEnabled: false}} name="Total" component={TotalScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

