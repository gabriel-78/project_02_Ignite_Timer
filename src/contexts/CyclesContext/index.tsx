import { createContext, ReactNode, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
  markCurrentCycleAsFinished: () => void
  updateSecondsPassed: (seconds: number) => void
}

interface CyclesContextProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export const CyclesContextProvider = ({ children }: CyclesContextProps) => {
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)
  const [cycles, setCycles] = useState<Cycle[]>([])

  const activeCycle = cycles.find(({ id }) => id === activeCycleId)

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((currentCycles) => [...currentCycles, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    setCycles((currentCycles) =>
      currentCycles.map((currentCycle) => {
        if (currentCycle.id === activeCycleId) {
          return { ...currentCycle, interruptedDate: new Date() }
        } else {
          return currentCycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const markCurrentCycleAsFinished = () => {
    setCycles((currentCycles) =>
      currentCycles.map((currentCycle) => {
        if (currentCycle.id === activeCycleId) {
          return { ...currentCycle, finishedDate: new Date() }
        } else {
          return currentCycle
        }
      }),
    )
  }

  const updateSecondsPassed = (seconds: number) =>
    setAmountSecondsPassed(seconds)

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        cycles,
        createNewCycle,
        interruptCurrentCycle,
        markCurrentCycleAsFinished,
        updateSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
