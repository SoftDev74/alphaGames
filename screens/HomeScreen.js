
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kids Learning Game</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LettersGame')}
      >
        <Text style={styles.buttonText}>Play Letters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bcccedff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF8C42',
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
