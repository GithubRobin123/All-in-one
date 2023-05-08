import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { RTCView, MediaStream, MediaStreamTrack } from 'react-native-webrtc';

const App = () => {
  // const [stream, setStream] = useState();

  // useEffect(() => {
  //   const getMediaStream = async () => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
  //       setStream(stream);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getMediaStream();

  //   return () => {
  //     if (stream) {
  //       stream.getTracks().forEach(track => track.stop());
  //     }
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      {/* {stream && <RTCView streamURL={stream.toURL()} style={styles.video} />} */}
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default App;
