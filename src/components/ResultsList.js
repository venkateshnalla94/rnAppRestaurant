import React, {useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import ResultDetail from "./ResultDetail";

const ResultsList=({title,results})=>{
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
                         return <ResultDetail result={item}/>
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

export default ResultsList;
