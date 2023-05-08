import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
const CELL_SIZE = Math.floor(width * 0.07);
const CELL_PADDING = Math.floor(CELL_SIZE * 0.05);
const GRID_SIZE = Math.floor((width - 2 * CELL_PADDING) / CELL_SIZE) * CELL_SIZE;


export const SnakeGame = () => {
    const [snakeDots, setSnakeDots] = useState([
      [0, 0],
      [2, 0]
    ]);
    const [foodDot, setFoodDot] = useState([Math.floor(Math.random() + 10), Math.floor(Math.random() + 10)]);
    const [direction, setDirection] = useState('RIGHT');
    const [boardWidth, setBoardWidth] = useState(width);
    const [boardHeight, setBoardHeight] = useState(height);
    const [isGameVsisble, setGameVisible] = useState(true);
    const [speed, setSpeed] = useState(2000)
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
  
  
    useEffect(() => {
      // const startGame = () => {
        if(isRunning){
          const interval = setInterval(() => {
            moveSnake();
          }, speed);
          setIntervalId(interval);
        }
        return () => clearInterval(intervalId);
      // }
    }, [isRunning, snakeDots]);
  
    const moveSnake = () => {
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];
  
      switch (direction) {
        case 'RIGHT':
          head = [head[0] + 10, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 10, head[1]];
          break;
        case 'UP':
          head = [head[0], head[1] - 10];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 10];
          break;
      }
  
      dots.push(head);
      // dots.shift();
      setSnakeDots(dots);
      // if ()
      console.log('dots', dots)
      console.log('snake dots', snakeDots)
      console.log('food dots dots', foodDot)
      console.log('speed', speed)
  
  
      // if(snakeDots[0] [0] === foodDot[0] && snakeDots[0] [1] === foodDot[1]){
      //   setFoodDot([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
        if (head[0] === foodDot[0] && head[1] === foodDot[1]) {
          setFoodDot([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
          if(speed - 100 > 0){
            setSpeed(speed - 100)
          }
        } else {
          dots.shift();
        }
        // setSnakeDots(snakeDots.push([snakeDots[snakeDots[snakeDots.length-1[0]]], snakeDots[snakeDots[[snakeDots.length-1[1]]]]]))
      // }
      // setFoodDot([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)])
    }
  
    const onLayout = (e) => {
      const { width, height } = e.nativeEvent.layout;
      setBoardWidth(width);
      setBoardHeight(height);
    }
  
    const onDirectionChange = (newDirection) => {
      setDirection(newDirection);
    }
  
    const gameChange = (type) => {
      if(type === 'stop') {
        setGameVisible(false)
        setIsRunning(false)
        setSnakeDots([
            [0, 0],
            [2, 0]
          ])
      } else {
        setGameVisible(true)
        setIsRunning(true)
        setSnakeDots([
            [0, 0],
            [2, 0]
          ])
      }
    }
  
    return (
      <View>
        {
          isGameVsisble ? (
            <View style={styles.Maincontainer} onLayout={onLayout}>
              <TouchableOpacity onPress={() => gameChange('stop')}>
              {/* <Ionicons name="md-arrow-up" size={32} color="white" /> */}
              {/* <View> */}
                <Text>close</Text>
              {/* </View> */}
           </TouchableOpacity>
          <SnakeBoard snakeDots={snakeDots} foodDot={foodDot} boardWidth={boardWidth} boardHeight={boardHeight} />
          <DirectionButtons onDirectionChange={onDirectionChange} />
        </View>
          ) : 
          <View>
            <Text>Game is closed</Text>
            <TouchableOpacity onPress={() => gameChange('start')}>
              {/* <Ionicons name="md-arrow-up" size={32} color="white" /> */}
              {/* <View> */}
                <Text>start</Text>
              {/* </View> */}
           </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
  
  const SnakeBoard = ({ snakeDots, foodDot, boardWidth, boardHeight }) => {
    return (
      <View style={[styles.board, { width: boardWidth-10, height: 250 }]}>
        {/* Render the snake */}
        {snakeDots.map((dot, i) => 
        //   {(i <= 0) ? (
        //     <View
        //     key={i}
        //     style={[styles.headss, { left: dot[0], top: dot[1] }]}
        //   />
        //   ) : 
          (
            <View
            key={i}
            style={[styles.dot, { left: dot[0], top: dot[1] }]}
          />
          )
        // }
        )}
  
        {/* Render the food */}
        <View
          style={[styles.food, { left: foodDot[0], top: foodDot[1] }]}
        />
      </View>
    );
  };
  
  
  const DirectionButtons = ({ onDirectionChange }) => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onDirectionChange('UP')}>
          {/* <Ionicons name="md-arrow-up" size={32} color="white" /> */}
          <View style={styles.button}>
            <Text>UP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDirectionChange('LEFT')}>
          {/* <Ionicons name="md-arrow-back" size={32} color="white" /> */}
          <View style={styles.button}>
            <Text>LEFT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDirectionChange('DOWN')}>
          {/* <Ionicons name="md-arrow-down" size={32} color="white" /> */}
          <View style={styles.button}>
            <Text>Down</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDirectionChange('RIGHT')}>
          {/* <Ionicons name="md-arrow-forward" size={32} color="white" /> */}
          <View style={styles.button}>
            <Text>Right</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  // export default SnakeGame;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Maincontainer: {
      flex: 1,
      position: 'relative',
      top: 80,
      backgroundColor: 'yellow',
      // height: 400,
      // padding: 200,
      // width: 400,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
    },
    board: {
      position: 'relative',
      padding:20,
      marginTop: 10,
      marginBottom: 200,
      backgroundColor: 'green',
    },
    dot: {
      position: 'absolute',
      width: 15,
      height: 15,
      backgroundColor: 'black',
      borderRadius: (3 * 2) / 2,
      borderWidth: 1,
      borderColor: 'red'
    },
    food: {
      position: 'absolute',
      width: 15,
      height: 15,
      backgroundColor: 'red',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      margin: 10,
      // position: 'absolute',
      padding: 20,
      width: 20,
      height: 20,
      backgroundColor: 'red',
    },
    headss: {
      position: 'absolute',
      width: 15,
      height: 15,
      backgroundColor: 'black',
      borderRadius: (3 * 2) / 2,
      borderWidth: 1,
      borderColor: 'red'
    },
  });