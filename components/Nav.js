import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from "twrnc"
export default function Nav() {
    const data=[
        {
            id:"123",
            title:"Get a ride",
            image:"https://links.papareact.com/3pn",
            screen:"mapScreen"
        },
          {
            id:"456",
            title:"order food",
            image:"https://links.papareact.com/28w",
            screen:"EatScren"
        }

    ]
  
    return (
      <FlatList
      data={data}
      horizontal
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <TouchableOpacity >
            <View style={tw`bg-gray-500 w-40 m-4 p-2`}>
                <Image
                style={{
                    width:120,height:120,resizeMode:"contain"
                   
                }}
                 source={{uri:item.image}}
                />
                <Text style={tw`pl-7 font-semibold`}>{item.title}</Text>
            </View>
        </TouchableOpacity>
      )}
      
      />
    )
  
}

const styles = StyleSheet.create({})
