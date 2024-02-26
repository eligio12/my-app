import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };

    const handleCreateAccount = () => {

        if (!isValidEmail(email)) {
            Alert.alert('Email invalid');
            return;
          }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Alert.alert('Account Created!');
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
                if (error.code === 'auth/invalid-email') {
                  Alert.alert('Email invalid');
                } else {
                  Alert.alert(error.message);
                }
              });
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed In!');
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Home');
            })
            .catch(error => {
                console.error(error);
                Alert.alert("Email invalid");
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subTitle}>Sign In to your account</Text>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#b2b2b2'
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#b2b2b2'
            />
            <TouchableOpacity onPress={handleSignIn}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCreateAccount}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.forgotPassword}>Forgot your password?</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#b2b2b2',
        padding: 15,
        width: '80%',
        height: 50,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        color: '#000',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#4c669f',
        marginTop: 10,
    },
});

export default LoginScreen;
