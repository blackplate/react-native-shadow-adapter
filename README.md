# RN Shadow Adapter

Inspired by [react-native-shadow-generator], this Library provides a simple way to keep react native shadows the same on both iOS and Android.

### Usage

```typescript
import {StyleSheet} from 'react-native';
import shadow from '@blackplate/shadow';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...shadow(16)
  }
})
```

[react-native-shadow-generator]: https://ethercreative.github.io/react-native-shadow-generator/
