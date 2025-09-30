import { BackButton, Button } from '@/components/button'
import Header from '@/components/header/header'
import { StyleSheet, View } from 'react-native'

export default function ErrorsK() {

    return (
        <View>
            <View>
                <Header/>
            </View>
            <View style={styles.container}>
                <Button title='E0100'/>
                <Button title='E6000'/>
                <Button title='E7000'/>
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