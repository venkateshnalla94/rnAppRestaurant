import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen=()=>{
     const [searchValue,setSearchValue]=useState("null");
     return(
          <View>
              <SearchBar term={searchValue} onTermChange={(newValue)=>setSearchValue(newValue)}/>
              <Text>{searchValue}</Text>
          </View>
          
     )
}

const styles=StyleSheet.create({

})

export default SearchScreen;
