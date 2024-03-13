import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ContactCardProps = {
  image: string;
  contactName: string;
  contactPhone: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  image,
  contactName,
  contactPhone,
}) => {
  return (
    <View style={styles.contactCard}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.contactImage}
      />

      <View>
        <Text style={styles.contactName}>{contactName}</Text>
        <Text style={styles.contactPhone}>{contactPhone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderColor: '#4C4B4B',
    borderBottomWidth: 1,
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#000000',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactPhone: {
    color: '#7B8788',
  },
});

export default ContactCard;
