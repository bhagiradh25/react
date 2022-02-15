import React, { useState } from "react";
import { Button, View, Text,StyleSheet,TextInput,TouchableOpacity,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker'


function HomeScreen({ navigation }) {
  return (
    
    <View style={styles.rect1}>
    
      <View style={styles.add}>
      <TouchableOpacity  onPress={() => navigation.navigate('Details')}>
            <View style={styles.addWrapper}></View>
            <Text style={styles.addtext}>+</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

function DetailsScreen(navigation) {
  const [selectedValue, setSelectedValue] = useState("java")
  return (
    <View style={styles.rect1}>
    <View style={styles.rect2}>
    <View style={styles.textInput}>
      <Picker style={styles.textInput}
        selectedValue={selectedValue}
       
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue) }
      >
        <Picker.Item label="Select " value="java"  />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  


      <TextInput
        placeholder="Caputure Width"
        placeholderTextColor="#788793"
        style={styles.textInput3}
      ></TextInput>
    <TextInput
      placeholder="Caputure Heigth"
      placeholderTextColor="rgba(120,135,147,1)"
      secureTextEntry={true}
      style={styles.textInput2}
    ></TextInput>
    
   
    <View style ={styles.text9} >
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Signup")}
        style={styles.button1}
      >
        <Text style={styles.text4}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Signup")}
        style={styles.button2}
      >
        <Text style={styles.text5}>Clear</Text>
      </TouchableOpacity>
    </View>
    
  </View>
  </View>


  
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Getting started" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  

  add: {
    flex:1,
    
    width: 100,
    height: 41,
    
    flexDirection:"row",
    marginLeft: 'auto',
    alignItems:'flex-end'
  },
  rect1: {
    flex: 1,
    backgroundColor: "white",
    alignContent:"center",
    justifyContent: 'center',
    
  },
  textInput: {
    width: 312,
    height: 60,
    color: "#1A13E7",
    borderColor: "#1A13E7",
    borderRadius:10,
    padding:10,
    marginBottom: 10,
    borderWidth: 1,
  
  
    
  },
  textInput2: {
    width: 313,
    height: 60,
    color: "#1da1f2",
    borderColor:  "#1A13E7",
    borderWidth: 1,
    marginTop: 8,
      
    borderRadius:10 ,
    padding:10
  },
  textInput3: {
    top: 0,
    width: 312,
    height: 60,
    color: "#1da1f2",
    borderColor: "#1A13E7",
    borderWidth: 1,
    justifyContent: 'center', alignItems: 'center',
    borderRadius:10,
    padding:10,
   
  },
  text2: {
    top: 4,
    color: "#1da1f2",
    position: "absolute",
    right: 0,
    fontSize: 18,
    lineHeight: 20,
    justifyContent: 'center', alignItems: 'center',
  },
  
  text2Stack: {
    width: 312,
    height: 42,
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 31,
    justifyContent: 'center', alignItems: 'center',
  },
  
  button1: {
    backgroundColor: "#1A13E7",
    borderRadius: 10,
    width: 117,
    height: 41,
    justifyContent: 'center', alignItems: 'center',
  },
  text4: {
    color: "white",
    fontSize: 24,
  
    justifyContent: 'center',
    justifyContent: 'center', alignItems: 'center',
  },
  button2: {
    height: 41,
    backgroundColor: "#1A13E7",
    borderRadius: 10,
    width: 117,
    marginHorizontal:5,
    
    justifyContent: 'center', alignItems: 'center',
  },
  text5: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    justifyContent: 'center', alignItems: 'center',
  },
  rect2: {
    justifyContent: 'center', alignItems: 'center',
  },
  add1: {
    justifyContent: 'center', alignItems: 'center',
  },
  text9: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:8
  
  },
addWrapper:{position:'relative',
width:60,
height:60,
backgroundColor:'#1A13E7',
borderRadius:60,
borderWidth:1,
},
addtext:{
  position:'absolute',
 width:100,
height:60,
textAlign:'center',
color:"white",
alignSelf:"center",
paddingVertical:20


},
container1: {
  flex: 1,
  paddingTop: 40,
  alignItems: "center"
}
 
  });

// const App = () => {
//   const [selectedValue, setSelectedValue] = useState("java");
//   return (
  //   <View style={styles.container1}>
  //     <Picker
  //       selectedValue={selectedValue}
  //       style={{ height: 50, width: 150 }}
  //       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
  //     >
  //       <Picker.Item label="Java" value="java" />
  //       <Picker.Item label="JavaScript" value="js" />
  //     </Picker>
  //   </View>
  // );
// }



// export default App;