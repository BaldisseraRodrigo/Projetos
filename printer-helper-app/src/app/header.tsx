import { StyleSheet, Text, View } from "react-native"

export default function Header(){

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>PRINTER HELPER</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        top: 50,
        backgroundColor: '#ED7D27',
        padding: 20,
    },
    title: {
        color:'#f7f7f7',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

})