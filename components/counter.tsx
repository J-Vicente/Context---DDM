import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import {UseCounter} from '../contexts/CounterContext'

export function CounterDisplay(){
  const { count } = UseCounter();

  return(
    <View style={[styles.counterContainer, styles.Containers]}>
      <Text style={styles.count}> { count } </Text>
      <Text style={styles.countText} > Contador atual </Text>
    </View>  
  );
}

export function CounterControls(){
  const {increment, decrement, reset, canIncrement, canDecrement} = UseCounter();

    return(
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonDecrement, !canDecrement && styles.buttonDisabled]} 
        onPress={decrement} disabled={!canDecrement}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonReset]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonIncrement, !canIncrement && styles.buttonDisabled]} 
        onPress={increment} disabled={!canIncrement}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>
    );
}

export function CounterStatus(){
  const {canDecrement, canIncrement} = UseCounter();

  let statusMsg = '';

  if (!canIncrement) {
    statusMsg = 'Valor máximo atingido';
  } else if (!canDecrement) {
    statusMsg = 'Valor mínimo atingido';
  } else {
    statusMsg = 'Você pode incrementar e decrementar';
  }

  return(
    <View style={[styles.statusContainer, styles.Containers]}>
      <Text style={styles.statusColor}>Status: {statusMsg} </Text>
      <View style={styles.statusCanChange}>
        <Text style={styles.statusText}>Decrementar: {canDecrement ? 'Permitido ✅' : 'Bloqueado 🚫'}</Text>
        <Text style={styles.statusText}>Incrementar: {canIncrement ? 'Permitido ✅' : 'Bloqueado 🚫'} </Text>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  Containers:{
    width: '90%',
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  counterContainer:{
    borderColor: '#6a8aaf',
    alignItems:'center',    
    marginTop: 30,
    backgroundColor:'#f0f9ff',

  },
  count:{
    fontSize: 40,
  },
  countText:{
    fontSize: 15,
  },
  buttonsContainer:{
    padding: 20,
    width: '80%',
    flexDirection:'row',
    justifyContent: 'space-around',
    margin:20,
  },
  button:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
    alignItems:'center',
  },
  buttonDecrement:{
    backgroundColor:'red',
  },
  buttonReset:{
    backgroundColor:'grey',
  },
  buttonIncrement:{
    backgroundColor:'blue' ,
  },
  buttonText:{
    color:'white',
    fontWeight:500,
  },
  buttonDisabled:{
    opacity: 0.5,
  },
  statusContainer:{
    borderColor: 'red',
  },
  statusCanChange:{
    justifyContent: 'space-between',
    flexDirection: 'row', 
  },
  statusText:{
    fontSize:11,
    textAlign:'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  statusColor:{
    color: '#6D6D6D',
  },
})