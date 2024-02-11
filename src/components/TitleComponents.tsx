import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'

interface TitleProps {
    title: string
}

export const TitleComponent = ({title} : TitleProps) => {
    const { height } = useWindowDimensions();
  return (
    <Text style={{
        height: height *0.15,
        ...styles.title}}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingVertical: 30,
        textAlign: 'center'
    },
})