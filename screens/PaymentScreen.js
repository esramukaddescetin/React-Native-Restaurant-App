// PaymentScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handlePayment = () => {
    // Ödeme bilgilerini kullanarak ödeme işlemlerini gerçekleştir
    // Burada ödeme işlemleri veya API çağrıları gibi işlemleri yapabilirsiniz.
    console.log('Payment processed successfully!');
    // Ödeme işlemi tamamlandıktan sonra isteğe bağlı olarak başka bir ekrana yönlendirme yapabilirsiniz.
    // Örneğin, ana ekrana dönmek için: navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={(text) => setExpiryDate(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Security Code"
        keyboardType="numeric"
        secureTextEntry
        value={securityCode}
        onChangeText={(text) => setSecurityCode(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Process Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 15,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PaymentScreen;
