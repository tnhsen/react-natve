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
        backgroundColor: '#FFD3B5',
    },
    button: {
        height: 50,
        backgroundColor: '#00DBFF',
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
    list: {
        backgroundColor: '#FFAAA6',
    },
    topView:{
        flex: 0.1,
    },
    middleView: {
        flex: 0.65,
    },
    bottomView: {
        flex: 0.25,
    },
    textList: {
        fontSize: 16,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default styles;