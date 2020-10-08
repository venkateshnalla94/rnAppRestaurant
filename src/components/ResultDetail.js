import React, {useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Image} from 'react-native';
import ResultsList from "./ResultsList";

const ResultDetail=({result})=>{
     return(
          <View style={styles.container}>
               <Image
                    style={styles.imageStyle}
                    source={{uri:result.image_url}}
               />
               <Text style={styles.name}>{result.name}</Text>
               <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews</Text>
          </View>
     )
}

const styles=StyleSheet.create({
     container:{
          marginLeft:15
     },
     imageStyle:{
          width:200,
          height:100,
          borderRadius:5,
          marginBottom:5
     },
     name:{
          fontWeight:"bold",
          
     }
})

export default ResultDetail;
