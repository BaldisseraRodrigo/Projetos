import { BackButton, Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/header/header'

export default function Kyocera() {
        
    function errors(){
        router.navigate('./errorsK')
    }

    return (
        <View>
            <View>
                <Header/>
            </View>
            <View style={styles.container}>
                <Button title='Erros' onPress={errors}/>
                <Button title='Obstrução'/>
                <Button title='Inatividade'/>
                <Button title='Manchas'/>
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