import { Text, View, TouchableOpacity } from "react-native";
import {UseCounter} from '../contexts/CounterContext'

export function CounterDisplay(){
  const { count } = UseCounter();

  return(
    <Text>
      Contador atual :{count} 
    </Text>
  );
}

export function CounterControls(){
  const {increment, decrement, reset, canIncrement, canDecrement} = UseCounter();

    return(
      <View>
        <TouchableOpacity onPress={decrement} disabled={!canDecrement}>
          <Text>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={reset}>
          <Text>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={increment} disabled={!canIncrement}>
          <Text>+1</Text>
        </TouchableOpacity>
      </View>
    );
}

export function CounterStatus(){
  const {canDecrement, canIncrement} = UseCounter();

  return(
    <View>
      <Text>Incrementar: {canIncrement ? 'Permitido ✅' : 'Bloqueado 🚫'} </Text>
      <Text>Decremenntar: {canDecrement ? 'Permitido ✅' : 'Bloqueado 🚫'}</Text>
    </View> 
  );
}