import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contexts/auth';

export default function Test() {
    const { loading, check } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de teste</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                check(loading)
            }}>
                <Text style={styles.txtBtn}>Check</Text>
            </TouchableOpacity>
        </View>
    )
}
