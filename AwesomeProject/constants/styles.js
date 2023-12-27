// styles.js
import { Center } from 'native-base';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  navBar: {
    position: 'absolute',
    bottom: 20, // Alt kenardan bosluk
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%', // Ekranın %80'ini kaplayacak şekilde genişlik
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
