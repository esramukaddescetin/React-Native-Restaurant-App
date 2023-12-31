// styles.js
import { Center } from 'native-base';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250, // Logo genişliği
    height: 250, // Logo yüksekliği
    position: 'absolute',
    top: 30, // Logo'nun üst kenardan uzaklığı
    zIndex: 2,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1, 
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 140,
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
    bottom: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
