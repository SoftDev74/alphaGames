import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LetterButton from '../components/LetterButton';
import * as Speech from 'expo-speech';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function LettersGameScreen() {
  const [letters, setLetters] = useState([]);
  const [target, setTarget] = useState('');
  const [feedback, setFeedback] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [lastTarget, setLastTarget] = useState(null);

  useEffect(() => {
    generateNewRound();
  }, []);

  const speak = (text) => {
    Speech.stop();
    Speech.speak(text, { language: 'en-US' });
  };

  const generateNewRound = () => {
    let shuffled = [...alphabet].sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);

    // --- ensure no immediate repeats ---
    let newTarget = selected[Math.floor(Math.random() * selected.length)];
    if (newTarget === lastTarget) {
      // pick a different one from the selected 4
      const alternatives = selected.filter((l) => l !== lastTarget);
      newTarget = alternatives[Math.floor(Math.random() * alternatives.length)];
    }

    setLetters(selected);
    setTarget(newTarget);
    setLastTarget(newTarget);

    setFeedback('');
    setDisabled(false);

    // Speak the correct new target
    setTimeout(() => speak(`Find the letter ${newTarget}`), 150);
  };

  const handlePress = (letter) => {
    if (disabled) return;

    Speech.stop();

    if (letter === target) {
      setFeedback('🎉 Correct!');
      setDisabled(true);

      speak('Correct');

      setTimeout(() => generateNewRound(), 900);
    } else {
      setFeedback('Try again!');
      speak('Try again');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Find the letter:</Text>
      <Text style={styles.target}>{target}</Text>

      <View style={styles.grid}>
        {letters.map((letter) => (
          <LetterButton
            key={letter}
            letter={letter}
            onPress={handlePress}
            disabled={disabled}
          />
        ))}
      </View>

      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfe7f9ff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  prompt: {
    fontSize: 28,
  },
  target: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 30,
  },
  feedback: {
    fontSize: 28,
    marginTop: 20,
  },
});
