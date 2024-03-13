import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.redCard]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.blueCard]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.greenCard]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },
  mainContainer: {
    padding: 8,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
  },
  card: {
    width: 100,
    height: 100,
    marginEnd: 8,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCard: {
    backgroundColor: 'red',
  },
  blueCard: {
    backgroundColor: 'blue',
  },
  greenCard: {
    backgroundColor: 'green',
  },
});
