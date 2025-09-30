import { router } from 'expo-router';
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: Props){
    return (
        <TouchableOpacity activeOpacity={.8} style={styles.button} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export function BackButton(){
    return (
        <TouchableOpacity activeOpacity={.8} style={styles.backButton} onPress={()=>router.back()}>
            <Text style={styles.title}>Voltar</Text>
        </TouchableOpacity>
    )
}