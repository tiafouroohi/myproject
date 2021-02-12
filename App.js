import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, SafeAreaView, Dimensions} from 'react-native';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRetro, faCoffee, faGrin, faHome, faHouseDamage, faPeopleCarry, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const App: () => React$Node = () => {
  const [search, setSearch] = useState([]);

  useEffect( () => {
    axios.get("https://us-central1-nodeapi-a29c4.cloudfunctions.net/doSeach")
    .then(response => setSearch(response.data))
    let items = Array.apply(null,Array(60)).map((v,i)=>{
      return{
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1)
      }
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.headerContainer}>
        <View style = {styles.icons}>
          <FontAwesomeIcon size = {50} icon={ faHome} />
          <FontAwesomeIcon size = {50} icon={ faCameraRetro } />
          <FontAwesomeIcon size = {50} icon={ faShoppingCart } />
          <FontAwesomeIcon size = {50} icon={ faPeopleCarry } />
          <FontAwesomeIcon size = {50} icon={ faGrin } />
          </View>
        
        <View style = {styles.header}>
          
          <Text style = {styles.pageHeader}>Home</Text>
          <Text style = {styles.pageHeader}>MediaFun</Text>
          <Text style = {styles.pageHeader}>Shop/Sell</Text>
          <Text style = {styles.pageHeader}>Communities </Text>
          <Text style = {styles.pageHeader}>Profile</Text>
        </View>
      </View>
      <Text style = {styles.pageTitle}>Pearl Necklaces</Text>
      <FlatList
        data={search}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri:`${item.thumbnail}`}}
            />
            <Text>
              
            </Text>
           <Text style = {styles.itemPrice}>{item.price}</Text> 
           <Text style = {styles.itemTitle}>{item.title}</Text>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  headerContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
   
  },
  picContainer: {
    flexDirection: 'row',
    marginLeft: 200
  },
  icons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    
  },
  pageHeader: {
    fontFamily: 'Avenir',
    fontSize: 15,
    padding: 20
  },
  pageTitle: {
    textAlign: 'center',
    padding: 20,
    fontFamily: 'Avenir-Medium',
    fontSize: 30

  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    margin: 20,
    resizeMode: 'contain'
  },
  itemTitle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    color: 'gray',
  },
  itemPrice:{
    fontFamily: 'Avenir-HeavyOblique',
    fontSize: 20,
  },

 
  
});



export default App;
