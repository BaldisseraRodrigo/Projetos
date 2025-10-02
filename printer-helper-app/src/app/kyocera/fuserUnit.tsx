import { BackButton } from '@/components/button'
import Header from '@/components/header/header'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function FuserUnit() {

    return (
        <View>
            <View>
                <Header subtitle='Troca da Unidade Fusora'/>
            </View>
            <ScrollView style={styles.container2}>
                <View style={styles.row}>
                    <Text style={styles.data}>I. DESLIGUE o equipamento e RETIRE o cabo de força.</Text>
                    <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>

                    <Text style={styles.data}>II. ABRA a tampa traseira e com uma chave de fenda fina, RETIRE os acabamentos laterais.</Text>
                                        <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>
                    <Text style={styles.data}>III. Com a chave de fenda, PRESSIONE a drobradiça direita da tampa traseira para soltar.</Text>
                                        <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>
                    <Text style={styles.data}>IV. RETIRE os outros acabamentos.</Text>
                                        <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>
                    <Text style={styles.data}>V. DESCONECTE os cabos de sinal e força da unidade fusora.</Text>
                                        <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>
                    <Text style={styles.data}>VI. SOLTE os quatro parafusos com uma chave philips e REMOVA a unidade fusora</Text>
                                        <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>
                    <Text style={styles.data}>VII. REMOVA a unidade fusora.</Text>
                                        <View style={styles.container3}>
                        <Image style={styles.image} source={require("../../../assets/images/m2040.png")} />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.container}>
                <BackButton/>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 100,
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
    container2: {
        top: 10,
    },
    head: {
        top: 20,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#ece2d2',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#41423a',
        fontWeight: 'bold',
    },
    row: {
        top: 100,
        padding: 10,
        justifyContent: 'center',
    },
    data: {
        fontSize: 20,
        color: '#41423a',
    },
    image: {
        width: 200,
        height: 200,
    },
    container3: {
        alignItems: 'center'
    }

})