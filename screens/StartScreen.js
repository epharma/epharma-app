import * as React from 'react';
import { 
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
 } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import { Dimensions } from 'react-native';

 const fullWidth = Dimensions.get('window').width;
 const fullHeight = Dimensions.get('window').height;


export default function StartScreen({navigation}) {
  
  return (
    <View style={styles.container}>
        <View style={styles.welcomeImage}>
        <Image
            source={require('../assets/images/doctor.jpg')}
            style={styles.Image}
          />
        </View>
      <View style={styles.welcomeTextContainer}>
      <Text style={styles.titleText}>ePharma</Text>
       <Text style={styles.welcomeText}>Committed to pharmaceutical excellence, 
       we helping you scan drugs barcode to verify their validity.</Text>
       <TouchableOpacity 
          style={styles.button}
          onPress={()=> navigation.navigate('Root')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <Ionicons
              name='md-arrow-forward'
              style={{textAlign: 'center', alignSelf: 'center', padding: 6, margin: 6, backgroundColor: 'black', color: '#c8e9ee', borderRadius: 5}}
              size={30}
              color='black'
            />
        </TouchableOpacity>
      </View>
      
          
      
    </View>
  );
}

StartScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: fullWidth,
    height: fullHeight,
    justifyContent: 'space-between',
    backgroundColor: '#c8e9ee',
  },
  welcomeContainer: {
    flex: 1,

  },
  welcomeImage: {
    flex: 1
  },
  Image: {
    width: fullWidth,
    height: fullHeight / 2,
    bottom: -20,
    resizeMode: 'contain',
    
  },
  welcomeTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f5f6',
    paddingVertical: 20,
    height: fullHeight / 2,
    marginTop: -60,
    borderTopLeftRadius: 120,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4689A3',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  welcomeText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    paddingBottom: 50,
    paddingHorizontal: 20
  },
  button: {
    flexDirection: 'row',
    width: 250,
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: '#c8e9ee',
    borderWidth: 2,
    borderColor: '#c8e9ee',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
    textAlign: 'left',
    padding: 10,
    alignSelf: 'center'
  }
});
