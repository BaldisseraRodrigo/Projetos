import { Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from "react-native"
import Header from './header'

export default function Index(){
    
    function handleOption1(){
        router.navigate('/dashboard')
    }

    function handleOption2(){
        router.navigate('/forms')
    }

    function handleOption3(){
        router.navigate('/tables')
    }

    return (
        <View>
            <View>
                <Header/>
            </View>
            
            <View style={styles.container}>
                <Button title='Soluções de Problemas' onPress={handleOption1}/>
                <Button title='Formulários'onPress={handleOption2}/>
                <Button title='Tabelas' onPress={handleOption3}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 250,
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
})