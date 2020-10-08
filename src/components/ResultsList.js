import React, {useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetail from "./ResultDetail";
import {withNavigation} from 'react-navigation'

const ResultsList=({title,results,navigation})=>{
     if(!results.length){
          return null;
     }
     return(
          <View style={styles.container}>
               <Text style={styles.titleStyle}>
                    {title}
               </Text>
               <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={results}
                    keyExtractor={(results)=>{return results.id}}
                    renderItem={({item})=>{
                         return (
                              <TouchableOpacity onPress={()=>navigation.navigate('Result',{id:item.id})}>
                                   <ResultDetail result={item}/>
                              </TouchableOpacity>
                         )
                    }}
               />
          </View>
     )
}

const styles=StyleSheet.create({
     titleStyle:{
          fontWeight:'bold',
          fontSize:18,
          marginLeft:15,
          marginBottom: 5
     },
     container:{
          marginBottom:10
     }
     
})

export default withNavigation(ResultsList);
