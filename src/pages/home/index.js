import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contexts/auth';

export default function Home() {
    const { dataContext, handleSignOut, userStorage, getUserStorage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo {dataContext.displayName}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                handleSignOut();
            }}>
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}