import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native/types_generated/index';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text>Instagram Notifications</Text>
        <TouchableOpacity>
          <Text>No leídas: </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
