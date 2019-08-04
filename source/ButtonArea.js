import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CHOICES from '../source/choices'

const ButtonArea = (props) => {
  return (
    <View>
      {CHOICES.map(choice => {
        return (
          <TouchableOpacity style={styles.buttonStyle} key={choice.name} onPress={() => props.onButtonPress(choice.name)}>
            <Text style={styles.buttonText}>{choice.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: { 
    width: 200, 
    margin: 10, 
    height: 50, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#640D14', 
  }, 
  buttonText: {
    fontSize: 25,
    color: 'white'
  }
});

export default ButtonArea