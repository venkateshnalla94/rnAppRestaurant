import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,TextInput,FlatList,Image} from 'react-native';
import yelp from '../api/yelp'

const ResultShowScreen=({navigation})=>{
     const id= navigation.getParam('id');
     const [data,setData]=useState(null)
     console.log(data)
     const getResult=async (id)=>{
          try{
               const response=await yelp.get(`/${id}`);
               setData(response.data)
          }catch (e) {
               console.log(e,"Error Message")
          }
     }
     useEffect(()=>{
          getResult(id)
     },[])
     
     if(!data){
          return null;
     }
     
     return(
          <View>
               
               <FlatList
                    data={data.photos}
                    keyExtractor={(photo)=>{return photo}}
                    renderItem={({item})=>{
                         return <Image style={styles.imageStyle} source={{uri:item}}/>
                    }}
               />
          </View>
     )
}

const styles=StyleSheet.create({
     imageStyle:{
          marginVertical:10,
          width:300,
          height:200,
          borderRadius:5,
          marginHorizontal:50
     }
})

export default ResultShowScreen;
