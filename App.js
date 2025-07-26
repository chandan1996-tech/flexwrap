// App.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  const [wrapMode, setWrapMode] = useState('wrap'); // default wrap mode

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FlexWrap: {wrapMode}</Text>

      {/* Buttons written manually */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => setWrapMode('nowrap')}>
          <Text style={styles.buttonText}>nowrap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setWrapMode('wrap')}>
          <Text style={styles.buttonText}>wrap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setWrapMode('wrap-reverse')}>
          <Text style={styles.buttonText}>wrap-reverse</Text>
        </TouchableOpacity>
      </View>

      {/* Boxes */}
      <View style={[styles.boxContainer, { flexWrap: wrapMode }]}>
        <View style={[styles.box, { backgroundColor: '#FF6B6B' }]}><Text style={styles.boxText}>1</Text></View>
        <View style={[styles.box, { backgroundColor: '#6BCB77' }]}><Text style={styles.boxText}>2</Text></View>
        <View style={[styles.box, { backgroundColor: '#4D96FF' }]}><Text style={styles.boxText}>3</Text></View>
        <View style={[styles.box, { backgroundColor: '#FFD93D' }]}><Text style={styles.boxText}>4</Text></View>
        <View style={[styles.box, { backgroundColor: '#845EC2' }]}><Text style={styles.boxText}>5</Text></View>
        <View style={[styles.box, { backgroundColor: '#FF6B6B' }]}><Text style={styles.boxText}>6</Text></View>
        <View style={[styles.box, { backgroundColor: '#6BCB77' }]}><Text style={styles.boxText}>7</Text></View>
        <View style={[styles.box, { backgroundColor: '#4D96FF' }]}><Text style={styles.boxText}>8</Text></View>
        <View style={[styles.box, { backgroundColor: '#FFD93D' }]}><Text style={styles.boxText}>9</Text></View>
        <View style={[styles.box, { backgroundColor: '#845EC2' }]}><Text style={styles.boxText}>10</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#333',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  boxContainer: {
    flexDirection: 'row',
    // flexWrap is dynamic
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  box: {
    width: 80,
    height: 80,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
