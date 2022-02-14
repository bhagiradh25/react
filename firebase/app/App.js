import * as React from 'react';
import { Button, View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.rect1}>
    
      <View style={styles.add}>
      <Button
        title="Add"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    </View>
  );
}

function DetailsScreen(navigation) {
  return (
    <View style={styles.rect1}>
   
    <TextInput
      placeholder="Select Customer"
      placeholderTextColor="#788793"
      style={styles.textInput}
    ></TextInput>
    <View style={styles.text2Stack}>
  
      <TextInput
        placeholder="Caputure Width"
        placeholderTextColor="#788793"
        style={styles.textInput3}
      ></TextInput>
    </View>
    <TextInput
      placeholder="Caputure Heigth"
      placeholderTextColor="rgba(120,135,147,1)"
      secureTextEntry={true}
      style={styles.textInput2}
    ></TextInput>
   
    <View  >
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
  container: {
    flex: 1,
    backgroundColor: "rgba(230,217,217,1)"
  },

  add: {
    backgroundColor: "rgba(29,161,242,1)",
    width: 100,
    height: 41,
    marginTop:650,
    marginLeft:275
  },
  rect1: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  textInput: {
    width: 312,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 280,
    marginLeft: 40
  },
  text2: {
    top: 4,
    color: "#1da1f2",
    position: "absolute",
    right: 0,
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 40
  },
  textInput3: {
    top: 0,
    width: 312,
    height: 42,
    color: "#1da1f2",
    position: "absolute",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    left: 0
  },
  text2Stack: {
    width: 313,
    height: 42,
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 31
  },
  textInput2: {
    width: 313,
    height: 42,
    color: "#1da1f2",
    borderColor:  "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 8,
    alignSelf: "center"
  },
  
  button1: {
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    width: 117,
    height: 41,
    justifyContent: "center",
    marginLeft:50,
    marginTop:10

  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  button2: {
    height: 41,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    width: 117,
    marginLeft:190,
    marginTop:-40,
  },
  text5: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  button1Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 402,
    marginLeft: 31,
    marginRight: 50
  }
  });


