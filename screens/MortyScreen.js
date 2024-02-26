import React from 'react';
import Character from './Character'
import CharacterDetail from './CharacterDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const StackMorty = createNativeStackNavigator();


class MortyScreen extends React.Component{
    render(){
        return(
            <StackMorty.Navigator
            screenOptions = {{
                headerStyle:{
                    backgroundColor: '#000',
                },
                headerTintColor: '#53eae3',                
            }}
            >
            <StackMorty.Screen name='Character' 
            component={Character}></StackMorty.Screen>
            <StackMorty.Screen name='CharacterDetail' 
            component={CharacterDetail}></StackMorty.Screen>

            </StackMorty.Navigator>
        );
    }
}

export default MortyScreen;