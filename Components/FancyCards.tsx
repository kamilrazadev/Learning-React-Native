import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Eiffel Tower</Text>
          <Text style={styles.cardLabel}>
            Champ de Mars, 5 Av. Anatole France
          </Text>
          <Text style={styles.cardDesc}>
            The Eiffel Tower is a wrought-iron lattice tower on the Champ de
            Mars in Paris, France. It is named after the engineer Gustave
            Eiffel, whose company designed and built the tower from 1887 to 1889
          </Text>
          <Text style={styles.cardFooter}>13 mins ago</Text>
        </View>
      </View>
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
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 6,
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowColor: '#000000',
    shadowRadius: 1,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
    paddingBottom: 16,
    display: 'flex',
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
  },
  cardDesc: {
    color: 'grey',
    fontSize: 12,
  },
  cardFooter: {
    marginTop: 8,
    textAlign: 'right',
    color: '#b3b3b3',
  },
});
