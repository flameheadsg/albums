import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 60,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'
  },
  viewStyle: {
    backgroundColor: '#F8F8F8'
  }
}

export default Header;
