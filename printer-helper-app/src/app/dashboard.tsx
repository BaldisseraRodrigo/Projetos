import { Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from './header'

export default function Dashboard() {
    return (
        <View>
            <View>
                <Header/>
            </View>
            <View style={styles.container}>
                <Button title='Home' onPress={()=>router.back()}/>
                <Button title='Erros'/>
                <Button title='Inatividade'/>
                <Button title='Manchas'/>
                <Button title='Obstrução'/>
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