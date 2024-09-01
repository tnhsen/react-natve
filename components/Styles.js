import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 'auto',
        borderRadius: 20,
        padding: 15,
        marginVertical: 15,
        alignItems: 'flex-start',
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
});

export default styles;