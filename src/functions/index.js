import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Verifica se existem credenciais locais 
export async function fVerifyUser(setDataContext, setLoading) {
    try {
        const dados = await AsyncStorage.getItem('@userStorage_Key')
        if (dados !== null) {
            setDataContext(JSON.parse(dados))
        }
    }
    catch (err) {
        console.log(err)
    }
    setLoading(false);
}

// função de login com email e senha
export async function fHandleSignIn(userStorage, setDataContext, setLoading, email, pwd) {
    setLoading(true)
    await auth()
        .signInWithEmailAndPassword(email, pwd)
        .then((value) => {
            setDataContext(value.user)
            userStorage(value.user)
        })
        .catch((err) => {
            console.log(err)
            alert('usuario ou senha iválidos')
        })
    setLoading(false)
}

// função de cadastro de novo usuário no banco de dados
export async function fHandleSignUp(setLoading, dbSetData, handleSignIn, name, email, pwd) {
    setLoading(true)
    await auth()
        .createUserWithEmailAndPassword(email, pwd)
        .then(async (value) => {
            await auth().currentUser.updateProfile({ displayName: name }) // Atualiza cadastro no banco adicionando displayName
                .then(() => {
                    dbSetData(value.user.uid, name, pwd) // Grava no banco informações do usuario cadastrado
                    handleSignIn(email, pwd)
                    return
                })
                .catch((err) => {
                    console.error(err)
                })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert('e-mail em uso');
            }
            if (error.code === 'auth/invalid-email') {
                alert('e-mail inválido');
            }
        });
    setLoading(false)
}

// Função de logout no banco de dados
export async function fHandleSignOut(setDataContext, setLoading) {
    setLoading(true)
    setDataContext({})
    try {
        await AsyncStorage.clear()
    }
    catch (err) {
        console.log(err)
    }
    await auth().signOut()
    setLoading(false)
}

// Cadastra informações do usuário no banco de dados
export async function fDbSetData(uid, name, pwd) {
    await firestore().collection('users').doc(uid).set({
        nome: name,
        createdAt: new Date(),
        pwd: pwd,
    })
        .then(() => {
        })
        .catch((err) => {
            console.error('erro no banco:', err)
        })
}

// Busca informações do usuário no banco de dados
export async function fDbGetData(dataContext) {
    await firestore().collection('users').doc(dataContext.uid).get()
        .then((data) => {
            console.log(data.data().nome)
        })
        .catch((err) => {
            console.error('erro no banco:', err)
        })
}

// permanencia do usuário logado no localStorage
export async function fUserStorage(dataContext) {
    try {
        await AsyncStorage.setItem('@userStorage_Key', JSON.stringify(dataContext))
    }
    catch (err) {
        console.log(err)
    }
}

// Busca do usuário logado no localStorage
export async function fGetUserStorage() {
    try {
        const data = await AsyncStorage.getItem('@userStorage_Key')
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}

// Funções de teste
export const fCheck = (setLoading, loading, data) => {
    console.log('check:', loading, data)
    setLoading(!loading)
}

