import { BackButton } from '@/components/button'
import Header from '@/components/header/header'
import { StyleSheet, Text, View } from 'react-native'

export default function E0100() {

    return (
        <View>
            <View>
                <Header/>
            </View>
            <View style={styles.container}>
                <View>
                    <View style={{flex: 1, backgroundColor: 'red'}}>
                        <Text>Código de ERRO 0100</Text>
                    </View>
                    <View style={{flex: 2, backgroundColor: 'darkorange'}}>
                        <Text>Código de ERRO 0100</Text>
                    </View>
                    <View style={{flex: 3, backgroundColor: 'green'}}>
                        <Text>Código de ERRO 0100</Text>
                    </View>
                </View>
                
                <BackButton/>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 250,
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
})