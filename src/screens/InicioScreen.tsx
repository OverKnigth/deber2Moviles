import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'

interface Props extends StackScreenProps <RootStackParams, 'InicioScreen'> {};

export const InicioScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
        <TitleComponent title="¡Bienvenido!" />
        <Image source={{ uri: 'https://www.qualitydevs.com/wp-content/uploads/2021/03/Desarrollo-apps-moviles-1288x724.jpg'}} 
        style={{ width: 350, height: 200, borderRadius: 10 }} />
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.text1} onPress={() => navigation.navigate('DivisionScreen')}>Acceder</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCE1',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#C7E9B0',
    borderRadius: 10,
    padding: 10,
    top: '3%',
  },
  text1: {
    fontSize: 20,
  }
})
