
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 30,
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
    zIndex: 2, // Bu satırı ekledik
  },
  subTitle: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 110,
    textAlign: 'center',
    zIndex: 2, // Bu satırı ekledik
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  navBar: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
    zIndex: 2, // Bu satır eklendi
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
