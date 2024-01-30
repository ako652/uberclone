import React from 'react'
import { StyleSheet,Text, View, SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import tw from "twrnc"
import Nav from '../components/Nav'


export default function HomeScreen() {
  
    return (
      <SafeAreaView style={tw`p-10`}>
       
            
                  <Image
                  style={
                    {
                        width:100,
                        height:100,
                        resizeMode:"contain"
                    }
                  } 
                  source={
                    {
                        uri:"https://links.papareact.com/gzs"
                    }
                  }/>
   
      <Nav />
      </SafeAreaView>
    )
  }
const style=StyleSheet.create({

})


