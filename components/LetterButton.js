
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function LetterButton({ letter, onPress, disabled }) {
//   return (
//       <TouchableOpacity
//         style={[styles.button, disabled && styles.disabled]}
//         onPress={() => !disabled && onPress(letter)}
//         activeOpacity={0.8}
//         disabled={!!disabled}
//       >
//       <Text style={styles.text}>{letter}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#33be1aff',
//     margin: 10,
//     paddingVertical: 18,
//     paddingHorizontal: 26,
//     borderRadius: 16,
//     minWidth: 90,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   disabled: {
//     opacity: 0.5,
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: '700',
//     color: 'white',
//   },
// });

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LetterButton({ letter, onPress, disabled }) {
  // Ensure disabled is ALWAYS a proper boolean
  const isDisabled = !!disabled;

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={() => !isDisabled && onPress(letter)}
      activeOpacity={0.8}
      disabled={isDisabled}
    >
      <Text style={styles.text}>{letter}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#33be1aff',
    margin: 10,
    paddingVertical: 18,
    paddingHorizontal: 26,
    borderRadius: 16,
    minWidth: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
  },
});
