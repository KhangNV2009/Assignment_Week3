import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Header from './source/Header';
import ChoiceCard from './source/ChoiceCard';
import ButtonArea from './source/ButtonArea';
import CHOICES from './source/choices'
import { randomComputerChoice, getRoundOutcome } from './source/utils'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: 'Make your choice'
    }
  }
  onChoicePress = (choice) => {
    const userChoice = CHOICES.find(item => item.name === choice)
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(userChoice.name, computerChoice.name)
    this.setState({ userChoice, computerChoice, result })
  }
  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header result={this.state.result} />
          </View>
          <View style={styles.choicesContainer}>
            <ChoiceCard
              playerName={'You'}
              choice={this.state.userChoice}
            />
            <Text>VS</Text>
            <ChoiceCard
              playerName={'Computer'}
              choice={this.state.computerChoice}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonArea onButtonPress={this.onChoicePress} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  header: {
    flex: 0.1,
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    flex: 0.4,
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      height: 5, width: 5
    },
  },
});