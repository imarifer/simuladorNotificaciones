import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [noLeidas, setNoLeidas] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Instagram Notifications</Text>
        <Text style={styles.contador}>No leídas: {noLeidas}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    width: '100%',
    height: '8%',
    gap: 10,
  },
  scrollView: {
    marginBottom: 50,
    borderBottomWidth: 1,
    borderLeftWidth: 1, 
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    width: '100%', 
    height: '80%'
  },
  contador: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1, 
    borderStyle: 'solid',
    borderColor: '#405DE6',
    borderRadius: 15,
    width: '35%', 
    height: '50%',
    backgroundColor: '#405DE6'
  }
});
