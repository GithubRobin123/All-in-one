import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// const { width, height } = Dimensions.get('window');
// const CELL_SIZE = Math.floor(width * 0.07);
// const CELL_PADDING = Math.floor(CELL_SIZE * 0.05);
// const GRID_SIZE = Math.floor((width - 2 * CELL_PADDING) / CELL_SIZE) * CELL_SIZE;
import { SnakeGame } from './src/Main/SnakeDame/index'

export default function App() {
  return (
    // <ImageBackground
    // source={require('./assets/splash.png')}
    // resizeMode="cover"
    // style={styles.background}>
      <View style={styles.container}>
        {/* <Text>My app isaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        <StatusBar style="auto" /> */}
        <SnakeGame />
      </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
