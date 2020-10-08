import React, {useState} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults'
import ResultsList from "../components/ResultsList";


const SearchScreen=()=>{
     const [term,setTerm]=useState('');
     const [searchApi,results,errorMessage]=useResults();
     /**
      *
      * @param price=$||$$||$$$
      */
     const filterByPrice=(price)=>{
          return results.filter(results=>{
               return results.price===price;
          })
     }
     
     return(
          <>
              <SearchBar
                   term={term}
                   onTermChange={setTerm}
                   onTermSubmit={()=> searchApi(term)}
              />
               {errorMessage ? <Text>{errorMessage}</Text>:null}
               <ScrollView>
                    <ResultsList  results={filterByPrice('$')} title={'Cost Effective'}/>
                    <ResultsList  results={filterByPrice('$$')} title={"Bit Pricier"}/>
                    <ResultsList  results={filterByPrice('$$$')} title={"Big Spender"}/>
               </ScrollView>
          </>
          
     )
}

const styles=StyleSheet.create({

})

export default SearchScreen;
