import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContextData{
  count : number;
  increment:()=> void;
  decrement:()=> void;
  reset:()=> void;
  canIncrement: boolean;
  canDecrement: boolean;
}

const CounterContext = createContext<CounterContextData>({} as CounterContextData);

export function CounterProvider({children}:{children: ReactNode }){
  const [count, setCount] = useState(0);

  function increment(){
    if(count<100){  
      setCount(count + 1);
    }
  }

  function decrement(){
    if(count>0){
      setCount(count - 1);
    }
  }

  function reset(){
    setCount(0);
  }

  const canIncrement = count < 100;
  const canDecrement = count > 0;

  return(
    <CounterContext.Provider value={{
      count,
      increment,
      decrement,
      reset,
      canIncrement,
      canDecrement
    }}>
      {children}
    </CounterContext.Provider>
  );
}

export function UseCounter(){
  const context = useContext(CounterContext);

  if(!context){
    throw new Error("useCounter deve ser usado dentro de CounterProvider");
  }
  return context;
}