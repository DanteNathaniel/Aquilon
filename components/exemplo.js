import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export const exemplo = () => {
    return(
        <View style={styles.container}>
            <Text>eu nao quero mais</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#018432'
    }
})
export default exemplo