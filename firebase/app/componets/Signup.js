import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function Signup(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <TextInput
        placeholder="Select Customer"
        placeholderTextColor="#788793"
        style={styles.textInput}
      ></TextInput>
      <View style={styles.text2Stack}>
        <Text style={styles.text2}></Text>
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
      <Icon name="arrow-back" style={styles.icon2}></Icon>
      <View style={styles.button1Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate()}
          style={styles.button1}
        >
          <Text style={styles.text4}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate()}
          style={styles.button2}
        >
          <Text style={styles.text5}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  textInput: {
    width: 312,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderBottomWidth: 2,
    fontSize: 18,
    marginTop: 280,
    alignSelf: "center",
    marginRight:-30
    
  },
  text2: {
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20},
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
    left: 0,
    alignSelf: "center"
  },
  text2Stack: {
    width: 313,
    height: 42,
    marginTop: 13,
    marginLeft: 31,
    alignSelf: "center"
  },
  textInput2: {
    width: 313,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 8,
    marginLeft: 31,
    alignSelf: "center"
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 35,
    marginTop: -398,
    marginLeft: 24
  },
  button1: {
    height: 41,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    width: 117,
    justifyContent: "center",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
    alignSelf: "center"
  },
  button2: {
    height: 41,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    width: 117,
    justifyContent: "center",
    marginLeft: 60,
    alignSelf: "center"
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
    marginRight: 50,
    alignSelf: "center"
  }
});

export default Signup;
