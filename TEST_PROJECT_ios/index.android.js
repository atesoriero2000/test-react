'use strict';
//@flow


import React, {Component} from 'react';
import{
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Touchable,
} from 'react-native';

class TEST_PROJECT_ios extends Component {
  
  render() {
    console.log("TOP");
    return(
      
      <View style={myStuff.COOLBack}>  
        
        <View style={myStuff.top}>
          <TouchableHighlight onPress={MyButton.topPress}>
            <Text style={myStuff.text}>
              TOP
            </Text>
          </TouchableHighlight>
        </View>
        
        <View style={myStuff.bottom}>
          <TouchableHighlight onPress={MyButton.bottomPress}>
            <Text style={myStuff.text}>
              BOTTOM
            </Text>
          </TouchableHighlight>
        </View>
        
      </View>
      
      
    );
  }
}

class MyButton extends Component {
  topPress() {
    console.log("TOP");
  }
  
  bottomPress() {
    console.log("BOTTOM");
  }
}

const myStuff = StyleSheet.create({
  
  COOLBack:{ 
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: "rgba(248,28,194,1)",//fucia
  },
  
  top:{
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: "rgba(28,56,248,1)",//blue
    justifyContent: 'center',
    
  },
  
  bottom:{
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  
  text:{
    fontSize: 75,
    textAlign: 'center',
    color: 'black',
  },
  

  
});


AppRegistry.registerComponent('TEST_PROJECT_ios', () => TEST_PROJECT_ios);

