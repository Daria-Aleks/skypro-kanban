import { createContext, useContext } from 'react';

export const TaskContext = createContext(null);

export function useTasksContext() {

  const tasks = useContext(TaskContext);

  if (!tasks) {
    throw new Error("Данные пользователя не были найдены");
  }

  return tasks;

}