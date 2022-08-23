import React, { createContext, ReactNode, useState } from "react";

export type Cycle = {
  projectName: string;
  time: number;
  status: "in progress" | "paused" | "canceled" | "finish";
  startDate: Date;
  id: number;
}

type CounterContextData = {
  currentCycle: Cycle | null;
  hasActiveCycle: boolean;
  amountSecondsPassed: number;
  changeActiveStatus: () => void;
  setSecondsPassed: (seconds: number) => void;
  addCurrentCycle: (cycle: { projectName: string, time: number }) => void;
  clearCurrentCycle: () => void;
  makeCycleAsFinishedOrCanceled: (cycleId: number, status: "finish" | "canceled") => void;
};

interface CounterContextProps {
  children: ReactNode 

};

export const CounterContext = createContext({} as CounterContextData);

export const CounterContextProvider = ({ children }: CounterContextProps) => {
  const [currentCycle, setCurrentCycle] = useState<Cycle>(null);
  const [hasActiveCycle, setHasActiveCycle] = useState<boolean>(false);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);
  const [cycles, setCycles] = useState<Cycle[]>([]);
  
  const changeActiveStatus = () => {
    setHasActiveCycle(state => !state);
  }

  const addCurrentCycle = (cycle: { projectName: string, time: number }) => {
    const cycleId = (new Date()).getTime();
    setCurrentCycle({
      ...cycle,
      status: "in progress",
      startDate: new Date(),
      id: cycleId
    });
    setCycles(cycles => [...cycles, {
      ...cycle,
      status: "in progress",
      startDate: new Date(),
      id: cycleId
    }]);

  }

  const makeCycleAsFinishedOrCanceled = (cycleId: number, status: "finish" | "canceled") => {
    setCycles(cycles => {
      return cycles.map(cycle => {
        if (cycle.id === cycleId)
          cycle.status = status
        return cycle
      });
    });
  }

  const setSecondsPassed = (seconds: number) => setAmountSecondsPassed(seconds);
  const clearCurrentCycle = () => setCurrentCycle(null);

  return (
    <CounterContext.Provider value={{
      currentCycle,
      hasActiveCycle,
      changeActiveStatus,
      amountSecondsPassed,
      setSecondsPassed, 
      addCurrentCycle,
      clearCurrentCycle,
      makeCycleAsFinishedOrCanceled
    }}>
      { children }
    </CounterContext.Provider>

  );

};
