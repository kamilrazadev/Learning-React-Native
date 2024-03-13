import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>

        <View style={styles.card}>
          <Text>me</Text>
        </View>

        <View style={styles.card}>
          <Text>to</Text>
        </View>

        <View style={styles.card}>
          <Text>scroll</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 8,
    borderRadius: 10,
    backgroundColor: '#CAD5E2',
  },
});
