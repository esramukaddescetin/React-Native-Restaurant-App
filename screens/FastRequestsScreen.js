// RequestsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RequestsScreen = () => {
  const handleRequest = (requestType) => {
    // Burada her bir butona tıklandığında gerçekleşecek işlemleri ekleyebilirsin.
    // Örneğin, bir bildirim gönderebilir veya ilgili işlemleri başlatabilirsin.
    console.log(`Request received: ${requestType}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleRequest('Garson Çağır')}>
        <Text style={styles.buttonText}>Garson Çağır</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleRequest('Çatal/Kaşık/Bıçak İste')}>
        <Text style={styles.buttonText}>Çatal/Kaşık/Bıçak İste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleRequest('Peçete/Islak Mendil İste')}>
        <Text style={styles.buttonText}>Peçete/Islak Mendil İste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleRequest('Ketçap/Mayonez İste')}>
        <Text style={styles.buttonText}>Ketçap/Mayonez İste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleRequest('Masada Ödeme')}>
        <Text style={styles.buttonText}>Masada Ödeme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RequestsScreen;
