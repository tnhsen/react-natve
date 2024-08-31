import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 150,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        alignItems: 'left',
    },
    image: {
        width:100,
        height: 90,
        marginBottom: 10,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        cplor: '#888',
    },
});

export default styles;