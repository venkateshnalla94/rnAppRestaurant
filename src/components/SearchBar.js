import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar=({term,onTermChange,onTermSubmit})=>{
     
     return(
          <View style={styles.backgroundStyle}>
          <Feather
               name={'search'}
               style={styles.IconStyle}
          />
          <TextInput
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle}
               placeholder={'Search'}
               value={term}
               onChangeText={(newValue)=> onTermChange(newValue)}
               onEndEditing={()=>{onTermSubmit()}}
          />
          </View>
     )
}

const styles=StyleSheet.create({
     backgroundStyle:{
          backgroundColor:"#F0EEEE",
          height:50,
          borderRadius:5,
          marginHorizontal:15,
          flexDirection:"row",
          marginTop:15
     },
     inputStyle:{
          flex:1,
          fontSize: 18
     },
     IconStyle:{
          fontSize:35,
          alignSelf:"center",
          marginHorizontal: 15
     }
     

})

export default SearchBar;
