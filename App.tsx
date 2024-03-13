import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FlatCard from './Components/FlatCard';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
import ContactCard from './Components/ContactCard';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards />

        <View style={styles.mainContainer}>
          <Text style={styles.headingText}>Contacts</Text>
          <ContactCard
            image="https://media.licdn.com/dms/image/C5603AQHiqa4C86xJuA/profile-displayphoto-shrink_200_200/0/1660993501362?e=2147483647&v=beta&t=2EwsJUdynXv7Nlty8LNxRAA2tj8jVoC08fDSq4nrpvo"
            contactName="Qasim Gufran"
            contactPhone="+92 318 1239123"
          />

          <ContactCard
            image="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lumbersexual-businessman-model-man-dressed-jeans-jacket-clothes_158538-1733.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1701043200&semt=ais"
            contactName="John Doe"
            contactPhone="+21 328 3899222"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },
});
export default App;
