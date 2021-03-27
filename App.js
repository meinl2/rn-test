import React from 'react';
import {StyleSheet} from 'react-native';
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
                <Stack.Screen options={{gestureEnabled: false}} name="Auth" component={AuthScreen}/>
                <Stack.Screen  name="Swiper" component={SwiperScreen}/>
                <Stack.Screen  name="Total" component={TotalScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
