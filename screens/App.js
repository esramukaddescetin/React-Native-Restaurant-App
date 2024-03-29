
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import MenuScreen from './MenuScreen.js';
import FastRequestsScreen from './FastRequestsScreen.js'; 
import PaymentScreen from './PaymentScreen.js'; 
import { styles } from '../constants/styles.js';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image/logo.png')} style={styles.backgroundImage} />
      <BlurView style={styles.blurView} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white" />
      <Image source={require('../assets/image/logo-r.jpg')} style={styles.logo} />
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        <Text style={styles.subTitle}>WELCOME</Text>
      </View>

      <View style={styles.navBar}>

    
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>

      
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FastRequests')}
        >
          <Text style={styles.buttonText}>Fast Requests</Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.buttonText}>Payment</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="FastRequests" component={FastRequestsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
