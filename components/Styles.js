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
        width: 100,
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
        justifyContent: 'center',
        fontSize: 20,
    },
    view: {
        flex: 1,
    },
    list: {
        backgroundColor: '#FFAAA6',
    },
    topView: {
        flex: 0.1,
    },
    middleView: {
        flex: 0.9,
    },
    textList: {
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    LoginScreen: {
        backgroundColor: '#FFD3B5',
        flex: 1,
    },
    TextLogin: {
        fontSize: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 50,
    },
    input: {
        height: 40,
        width: 350,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        alignSelf: 'center'
    },
    loginButton: {
        height: 40,
        width: 250,
        backgroundColor: '#F67280',
        borderColor: 'Gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        alignSelf: 'center',
        borderRadius: 20,
    },
    textButtonLV2: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 16,
    },
    loginButtonLV2: {
        height: 30,
        width: 200,
        backgroundColor: '#C06C84',
        borderColor: 'Gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        alignSelf: 'center',
        borderRadius: 20,
    },
    cartTop: {
        flex: 0.1,
    },
    cartBottom: {
        flex: 0.9,
    },
    clearButton: {
        height: 100,
        backgroundColor: '#00DBFF',
        textAlign: 'center',
        justifyContent: 'center',
    },
    username: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 80,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode:"cover",
    },
    profileIcon: {
        width: 150,
        height: 150,
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 10,
        width: 160,
        height: 160,
        borderRadius: 75,
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cartItem: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        height: 70,
        borderRadius: 20,
    }
});

export default styles;