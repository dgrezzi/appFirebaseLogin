import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    avoid: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',
    },
    viewImput: {
        marginHorizontal: 20,
        marginTop: 80,
        marginBottom: 20,
    },
    textInput: {
        backgroundColor: '#fff',
        padding: 8,
        fontSize: 18,
        margin: 5,
        borderRadius: 5,
    },
    viewBotton: {
        margin: 10,
        position: 'relative',
        alignItems: 'center'
    },
    btnBlue: {
        width: '90%',
        height: 45,
        backgroundColor: '#55f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
    },
    btnGray: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
    textBtnBlue: {
        fontSize: 22,
        color: '#ddd',
    },
    textBtnGray: {
        fontSize: 20,
        color: '#555',
    },
    textGray: {
        fontSize: 50,
        color: '#555',
        fontWeight: 'bold',
    },
    load: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})