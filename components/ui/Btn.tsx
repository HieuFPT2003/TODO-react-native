import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Btn({style, onPress, title} = {style: {}, onPress: () => {}, title: 'Button'}) {
  return (
    <Pressable onPress={onPress} >
        <View style={style}>
            <Text className="text-white">{title}</Text>
        </View>
    </Pressable>
  )
}
