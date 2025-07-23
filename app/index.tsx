import { CounterProvider } from '../contexts/CounterContext';
import {CounterDisplay, CounterStatus, CounterControls} from '../components/counter';
import {View, StyleSheet} from 'react-native';

export default function Index() {
  return (
    <CounterProvider>
      <View style={styles.container}>
      <CounterDisplay/>
      <CounterControls/>
      <CounterStatus/>
      </View>
    </CounterProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',
  }
})
