import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import ClearCache from '../../src/index';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  const getCacheSize = () => {
    ClearCache.getCacheSize().then(({ fileSize, unit }) => {
      setResult(fileSize + unit);
    });
  };

  React.useEffect(() => {
    getCacheSize();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button
        title="clear"
        onPress={async () => {
          const result = await ClearCache.runClearCache();

          if (result) {
            Alert.alert('success');
          }

          getCacheSize();
        }}
      />
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
