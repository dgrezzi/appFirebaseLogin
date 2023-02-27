import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { AuthContext } from '../../contexts/auth';

export default function Signup() {
    const { handleSignIn, handleSignUp, loading, verifyUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [type, setType] = useState(false);

    useEffect(() => {
        verifyUser()
    }, []);

    return (
        !loading ? (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.avoid} >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <View style={styles.viewImg}>
                            {/* <Image style={styles.img} source={require('../../assets/logo.png')} resizeMode="contain" /> */}
                            <Text style={styles.textGray}>meu<Text style={styles.textRed}>App</Text></Text>
                        </View>
                        <View style={styles.viewImput}>
                            {type && (<TextInput style={styles.textInput} placeholder='nome' value={name} onChangeText={(txt) => { setName(txt) }} />)}
                            <TextInput style={styles.textInput} placeholder='e-mail' value={email} onChangeText={(txt) => { setEmail(txt) }} />
                            <TextInput style={styles.textInput} placeholder='Senha' secureTextEntry={true} value={pwd} onChangeText={(txt) => { setPwd(txt) }} />
                        </View>
                        <View style={styles.viewBotton}>
                            <TouchableOpacity style={[styles.btnBlue, { backgroundColor: type ? "#f55" : "#5d5" }]} onPress={() => {
                                if (type == false && !loading) { // tela de login
                                    if (email && pwd.length >= 6) {
                                        handleSignIn(email, pwd)
                                        return
                                    } else
                                        console.error('preencha dados corretamente')
                                }
                                if (type == true && !loading) { // Tela de cadastro
                                    if (name && email && pwd.length >= 6) {
                                        handleSignUp(name, email, pwd)
                                        return
                                    } else
                                        console.error('preencha dados corretamente')
                                }
                                else
                                    console.error('loading')
                            }}>
                                {!loading && (<Text style={[styles.textBtnBlue, { color: type ? "#fff" : "#000" }]}>{type ? "Cadastrar" : "Acessar"}</Text>)}
                                {loading && (<ActivityIndicator size="large" color="#0000ff" />)}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnGray} onPress={() => { setType(!type) }}>
                                <Text style={styles.textBtnGray}>{type ? "Já possuo uma conta" : "Cadastrar novo usuário"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        ) :
            (
                <View style={styles.load}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
    )
}