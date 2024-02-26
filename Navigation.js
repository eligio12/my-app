import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MapScreen from "./screens/MapScreen";
import MortyScreen from "./screens/MortyScreen";

//Icons
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                tabBarActiveTintColor: '#2055B1',
                tabBarActiveBackgroundColor: '#D8E2F7',
                headerShown: false, // Oculta el header
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Morty"
                component={MortyScreen}
                options={{
                    tabBarLabel: 'Rick and Morty',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="users" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="google-maps" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

function Login() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#D8E2F7',
                },
                headerTintColor: '#2055B1',
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTitle: 'Login', // Cambia el nombre aquí
                }}
            />
            <Stack.Screen
                name="Home"
                component={MyTabs}
                options={{
                    headerTitle: 'Exit', // Cambia el nombre aquí
                  }}
            />
        </Stack.Navigator>

    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Login />
        </NavigationContainer>
    )
}
