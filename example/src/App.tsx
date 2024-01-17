import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, TestLib } from 'react-native-junsible';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7)
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TestLib/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});