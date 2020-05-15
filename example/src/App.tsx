import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ClearCache from '../../src/index';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    ClearCache.getCacheSize().then(({ fileSize, unit }) => {
      setResult(fileSize + unit);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
