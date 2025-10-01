import { BackButton, Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../components/header/header'

export default function Problems() {
    
    function kyocera(){
        router.navigate('/kyocera/index')
    }

    return (
        <View>
            <View>
                <Header/>
            </View>
            <View style={styles.container}>
                <Button title='Kyocera' onPress={kyocera}/>
                <Button title='Ricoh'/>
                <Button title='Lexmark'/>
                <Button title='Brother'/>
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