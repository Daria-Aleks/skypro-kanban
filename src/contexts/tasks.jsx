import { createContext, useState } from "react";
export const TaskContext = createContext("user");

export const TaskProvider = ({children}) => {
	const [cards, setCards ] = useState("user")

  const getCards = (cards) => {
    setCards(cards)
  }
  return (
    <TaskContext.Provider value={{cards, getCards}}>
      {children}
    </TaskContext.Provider>
  )
}

// import { createContext, useContext } from 'react';

// export const TaskContext = createContext(null);

// export function useTasksContext() {

//   const tasks = useContext(TaskContext);

//   if (!tasks) {
//     throw new Error("Данные пользователя не были найдены");
//   }

//   return tasks;

// }