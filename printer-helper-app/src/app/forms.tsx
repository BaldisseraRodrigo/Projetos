import { Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../components/header/header'

export default function Forms() {
    return (
        <View>
            <View>
                <Header/>
            </View>
            <View style={styles.container}>
                <Button title='Home' onPress={()=>router.back()}/>
                <Button title='Formulário de Instalação' onPress={() => router.push('/formularioInstalacao')}/>
                <Button title='Formulário de Retirada' onPress={() => router.push('/formularioRetirada')}/>
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