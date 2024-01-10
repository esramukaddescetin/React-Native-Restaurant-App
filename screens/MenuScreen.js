// MenuScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MenuScreen = () => {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Spaghetti Bolognese', description: 'Classic Italian pasta with meat sauce', image: require('../assets/image/bolognese.jpg') },
    { id: 2, name: 'Margherita Pizza', description: 'Tomato, mozzarella, and basil', image: require('../assets/image/pizza.jpg') },
    { id: 3, name: 'Caesar Salad', description: 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing', image: require('../assets/image/caesar.jpg') },
    { id: 4, name: 'Spaghetti Bolognese', description: 'Classic Italian pasta with meat sauce', image: require('../assets/image/bolognese.jpg') },
    { id: 5, name: 'Margherita Pizza', description: 'Tomato, mozzarella, and basil', image: require('../assets/image/pizza.jpg') },
    { id: 6, name: 'Caesar Salad', description: 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing', image: require('../assets/image/caesar.jpg') },
    // ... Add more items as needed
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#f39c12',
    padding: 8,
    borderRadius: 5,
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default MenuScreen;
