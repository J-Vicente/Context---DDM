import { CounterProvider } from '../contexts/CounterContext';
import {CounterDisplay, CounterStatus, CounterControls} from '../components/counter';
import {View} from 'react-native';

export default function Index() {
  return (
    <CounterProvider>
      <View>
      <CounterDisplay/>
      <CounterControls/>
      <CounterStatus/>
      </View>
    </CounterProvider>
  );
}
