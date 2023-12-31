// App.js
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { styles } from './constants/styles.js';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Yeni eklenen logo */}

      <Image source={require('./assets/image/logo.png')} style={styles.backgroundImage} />
      <BlurView style={styles.blurView} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white" />
      <Image source={require('./assets/image/logo-r.jpg')} style={styles.logo} />
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>City Cafe</Text>
        <Text style={styles.subTitle}>HOŞGELDİNİZ</Text>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>HOŞGELDİNİZ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Call Waiter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
