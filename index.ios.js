/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Play extends Component {
  render() {
    return (
      <Image
        source={require('./assets/images/background.png')}
        style={styles.backgroundImg}
      >
        <View style={styles.bigMessTop}>
          <Text style={styles.bigMessText}>YOU WON</Text>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Image style={{top:10,left:-5}} source={require('./assets/images/cards.png')}/>
            <Text style={[styles.subMessText]}>CHALLENGES</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teams}>
            <View style={styles.left}>
              <Image style={{resizeMode:'contain',top:-1,marginRight:3,width:20,height:20}} source={require('./assets/images/chelsea.png')}></Image>
              <Text style={styles.teamName}>CHELSEA</Text>
            </View>
            <View style={styles.leagueLogo}>
              <Image style={{resizeMode:'contain',width:30,height:30}} source={require('./assets/images/league.png')}></Image>
            </View>
            <View style={styles.right}>
              <Text style={styles.teamName}>ARSENAL</Text>
              <Image style={{resizeMode:'contain',top:-1,marginLeft:3,width:19,height:19}} source={require('./assets/images/arsenal.png')}></Image>
            </View>
          </View>
          <View style={styles.scoreContainer}>
            <Image style={{resizeMode:'contain',marginRight:10,width:70,height:70}} source={require('./assets/images/chelsea.png')}></Image>
            <Text style={styles.result}>WIN</Text>
          </View>
          <View style={styles.coins}>
            <Text style={styles.coinsText}>COLLECT 250</Text>
            <Image style={{resizeMode:'contain',right:-5,top:-2,width:25,height:25}} source={require('./assets/images/coins.png')}></Image>
          </View>
        </View>
        <View style={styles.smallTriangle}></View>
        <View style={styles.bigMessBottom}>
          <Text style={styles.totalWon}>TOTAL WON</Text>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={styles.totalPoints}>+500</Text>
            <Image style={{resizeMode:'contain',right:-5,top:-2,width:65,height:65}} source={require('./assets/images/coins.png')}></Image>
          </View>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={styles.totalGreen}>+1200</Text>
            <Image style={{resizeMode:'contain',right:-5,top:-2,width:35,height:35}} source={require('./assets/images/exp.png')}></Image>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImg:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  bigMessTop:{
    marginBottom:35,
    backgroundColor:'transparent',
  },
  bigMessBottom:{
    marginTop:35,
    backgroundColor:'transparent',
  },
  bigMessText:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:90,
    transform:[{skewY:'-4degrees'}],
    textShadowColor:'black',
    textShadowRadius:5,
    textShadowOffset:{width:2,height:2},
  },
  subMessText:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:40,
    transform:[{skewY:'-4degrees'}],
    textShadowColor:'black',
    textShadowRadius:5,
    textShadowOffset:{width:2,height:2},
  },
  container:{
    backgroundColor:'#303038',
    width:346,
    height:220,
    borderRadius:2,
  },
  smallTriangle:{
    backgroundColor:'#303038',
    width:25,
    height:25,
    transform:[{rotate:'-45degrees'}],
    top:-12,
  },
  teams:{
    backgroundColor:'transparent',
    flexDirection:'row',
    height:25,
  },
  left:{
    flex:1,
    height:25,
    backgroundColor:'#044fa1',
    justifyContent:'flex-start',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:2,
    paddingLeft:5,
    paddingTop:4,
  },
  leagueLogo:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:35,
    width:35,
    top:-5,
    borderRadius:2,
    borderWidth:1,
    borderColor:'grey',
  },
  right:{
    backgroundColor:'#c21b2c',
    height:25,
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:2,
    paddingRight:5,
    paddingTop:4,
  },
  team:{
    backgroundColor:'#044fa1',
    borderRadius:2,
  },
  teamName:{
    fontFamily:'BebasNeueBold',
    color:'white',
    fontSize:18,
  },
  scoreContainer:{
    backgroundColor:'#044fa1',
    alignSelf:'center',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    height:110,
    width:320,
    marginTop:15,
  },
  result:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:60,
    textAlign:'center',
    justifyContent:'center',
    marginTop:10,
  },
  coins:{
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#ffcc00',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    height:45,
    width:320,
    paddingTop:5
  },
  coinsText:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:30,
  },
  totalWon:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:30,
    textAlign:'center',
    transform:[{skewY:'-4degrees'}],
    textShadowColor:'black',
    textShadowRadius:5,
    textShadowOffset:{width:2,height:2},
    marginBottom:10,
  },
  totalPoints:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:70,
    textAlign:'center',
    transform:[{skewY:'-4degrees'}],
    textShadowColor:'#ffcc00',
    textShadowRadius:3,
    textShadowOffset:{width:1.5,height:1.5},
  },
  totalGreen:{
    color:'white',
    fontFamily:'BebasNeueBold',
    fontSize:40,
    textAlign:'center',
    transform:[{skewY:'-4degrees'}],
    textShadowColor:'#32d900',
    textShadowRadius:3,
    textShadowOffset:{width:1.5,height:1.5},
  }
});

AppRegistry.registerComponent('Play', () => Play);
