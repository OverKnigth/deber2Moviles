import React, { useState } from 'react' 
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' 

export const DivisionScreen = () => { 
    const [numero1, setNumero1] = useState(0); 
    const [numero2, setNumero2] = useState(0); 

    const dividir = () => { 
        if (numero1 === 0 && numero2 === 0) { 
            return 'Indeterminación'; 
        } else if (numero2 === 0) { 
            return 'No existe división entre cero'; 
        } else { 
            return`El resultado de la división es: ${numero1 / numero2}`;
        } 
    }; 

    return ( 
        <View style={styles.container}> 
            <Text style={styles.title}>¡Realiza tus Divisiones!</Text> 
            <Text style={styles.text1}>Ingresa dos números</Text> 
            <TextInput placeholder='Ingrese el primer número' keyboardType='numeric'
             onChangeText={(numero1) => setNumero1(parseInt(numero1))} style={styles.inText}/> 
            <TextInput placeholder='Ingrese el segundo número' keyboardType='numeric' 
            onChangeText={(numero2) => setNumero2(parseInt(numero2))} style={styles.inText}/> 
            <TouchableOpacity style={styles.bot} onPress={dividir}> 
                <Text style={styles.textt}>Dividir</Text> 
            </TouchableOpacity> 
            <Text style={styles.text3}>{dividir()}</Text> 
        </View> 
    ); 
} 



const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#F9FCE1', 
        alignItems: 'center', 
    },   
    title: { 
        fontSize: 50, 
        fontWeight: 'bold', 
        top: '3%',   
        textAlign: 'center', 
    }, 
    text1: { 
        fontSize: 20, 
        top: '4%', 
        textAlign: 'center', 
    }, 
    inText: { 
        backgroundColor: '#E9EDC9', 
        borderRadius: 10, 
        padding: 10, 
        fontSize: 20,    
        width: '80%', 
        marginVertical: 8, 
        top: '5%', 
        textAlign: 'center', 
    }, 
    bot: { 
        top: '8%',    
        backgroundColor: '#C7E9B0', 
        borderRadius: 10, 
        padding: 10, 
        marginVertical: 3, 
        width: '80%', 
    }, 
    text3: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        top: '11%',  
    }, 
    textt: { 
        fontSize: 20, 
        textAlign: 'center', 
    } 
})