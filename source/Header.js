import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  let textColor = props.result === 'Victory!' ? 'green' : 'red'
  return (
    <View style={styles.headerWrapper}>
      <Text style={[styles.headerText, {color: textColor}]}>{props.result}</Text>
    </View>
  );
}

export default Header; // Don’t forget to use export default!

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
  },
});