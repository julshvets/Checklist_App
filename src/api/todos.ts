import { Todo, TodoData, TodoUpdateData } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number): Promise<Todo[]> => (
  client.get<Todo[]>(`/todos?userId=${userId}`)
);

export const addTodos = (userId: number, data: TodoData): Promise<Todo> => (
  client.post<Todo>(`/todos?userId=${userId}`, data)
);

export const removeTodo = (todoId: number): Promise<void> => (
  client.delete(`/todos/${todoId}`)
);

export const updateTodo = (todoId: number, data: TodoUpdateData): Promise<Todo> => (
  client.patch<Todo>(`/todos/${todoId}`, data)
);
