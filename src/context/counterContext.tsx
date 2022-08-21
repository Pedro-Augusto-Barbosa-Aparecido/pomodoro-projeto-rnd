import { Alert } from "native-base";
import React, { createContext, ReactNode, useState } from "react";

export type Cycle = {
  projectName: string;
  time: number;
  status: "in progress" | "paused" | "canceled" | "finish"
}

type CounterContextData = {
  currentCycle: Cycle | null;
  hasActiveCycle: boolean;
  amountSecondsPassed: number;
  changeActiveStatus: () => void;
  setSecondsPassed: (seconds: number) => void;
};

interface CounterContextProps {
  children: ReactNode 

};

export const CounterContext = createContext({} as CounterContextData);

export const CounterContextProvider = ({ children }: CounterContextProps) => {
  const [currentCycle, setCurrentCycle] = useState<Cycle>(null);
  const [hasActiveCycle, setHasActiveCycle] = useState<boolean>(false);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);
  
  const changeActiveStatus = () => {
    setHasActiveCycle(state => !state);
  }

  const setSecondsPassed = (seconds: number) => setAmountSecondsPassed(seconds);

  return (
    <CounterContext.Provider value={{
      currentCycle,
      hasActiveCycle,
      changeActiveStatus,
      amountSecondsPassed,
      setSecondsPassed
    }}>
      { children }
    </CounterContext.Provider>

  );

};
