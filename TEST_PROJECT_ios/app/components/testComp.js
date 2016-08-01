//@flow

import React, { Component, } from 'react'
import { 
  AppRegistry,
  View, 
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

class testComp extends Component {
  
  render(){
    return(
      <View style={styles.cotainer}>
        <Text style={styles.largerText}>
          First View Button
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Does Nothing
          </Text>
        </TouchableHighlight>
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',
  },
  largerText:{
    flex: 1,
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43',
  },
  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3fb0ac'
  },
  buttonText:{
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#fae596',
  },
  
});
export default testComp