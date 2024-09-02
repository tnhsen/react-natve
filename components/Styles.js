import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 'auto',
        borderRadius: 20,
        padding: 15,
        marginVertical: 15,
    },
    image: {
        width:100,
        height: 90,
        marginBottom: 10,
        alignSelf: 'center',
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'left',
    },
    price: {
        fontSize: 16,
        color: '#FF0000',
    },
    descript: {
        fontSize: 16,
        color: '#768A96'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff3e0',
    },
    button: {
        backgroundColor: '#00DBFF',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
    },
    textButton: {
        alignSelf: 'center',
        fontSize: 20,
    },
    view: {
        flex: 1,
    },
});

export default styles;