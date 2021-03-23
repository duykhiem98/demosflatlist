/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component, useState} from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  Item,
  SafeAreaView,
} from 'react-native';


const App = () => {

  const [DATA,setDATA] = useState([
    {
      name: 'PD1',
      id: 1,
      title:'asdsadasdsa'
    },
    {
      name: 'PD2',
      id: 2,
    },
    {
      name: 'PD3',
      id: 3,
    },
    {
      name: 'PD3',
      id: 4,
    },
    {
      name: 'PD3',
      id: 5,
    },
    {
      name: 'PD3',
      id: 6,
    },
    {
      name: 'PD3',
      id: 7,
    },
    {
      name: 'PD3',
      id: 8,
    },
    {
      name: 'PD3',
      id: 9,
    },
    {
      name: 'PD3',
      id: 10,
    },
  ]);
    return(
      <View style={styles.container} >
        <View style={styles.up}>
          <TouchableOpacity style={styles.Menu}>
            <Image source={require('./image/menuline.png')} style={{width:30,height:30}} />
          </TouchableOpacity>
          <View style={styles.TBB}>
              <Text style={styles.TB}>Thong bao</Text>
          </View>
          <TouchableOpacity style={styles.fliter}>
            <Image source={require('./image/filter.png')} style={{width:27,height:27 ,}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.loupe}>
            <Image source={require('./image/loupe.png')} style={{width:27,height:27}} />
          </TouchableOpacity>
        </View>
        <View style={styles.mid}>
          <Text style={{paddingHorizontal:23}}>MOI NHAT</Text>
        </View>

        <View style={styles.containerlist}>
          <SafeAreaView>
             <FlatList
                data={DATA}
                renderItem={({item})=>(
                  <TouchableOpacity  >
                  <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item )=> item.id}
              />
              </SafeAreaView>
        </View>
      </View>
    )
  }
  
export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  up:{
    flex:1,
    flexDirection:'row',
  },

  containerlist:{
    flex:7,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 40,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },


  Menu:{
    flexDirection:'row',
    alignItems:'flex-start',
    paddingLeft:'5%',
    paddingTop:20,

  },
  TBB:{
    flexDirection:'row',
    paddingLeft:'26%',
    paddingTop:20,
  },
  TB:{
   fontWeight: 'bold',
    fontSize:20,
    color:'black'
  },
  fliter:{
    paddingLeft:'18%',
    paddingTop:20,
  },
  loupe:{
    paddingLeft:"3%",
    paddingTop:20
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

})