"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useTodos() {
  const queryClient = useQueryClient();

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("/api/todos");
      if (!res.ok) {
        throw new Error("Failed to fetch todos");
      }
      return res.json();
    },
  });
  const addTodoMutation = useMutation({
    mutationFn: async (todo: { title: string; completed?: boolean }) => {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!res.ok) {
        throw new Error("Failed to add todo");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async ({
      id,
      ...todo
    }: {
      id: string;
      title?: string;
      completed?: boolean;
    }) => {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!res.ok) {
        throw new Error("Failed to update todo");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete todo");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todos: todosQuery.data,
    isLoading: todosQuery.isLoading,
    error: todosQuery.error,
    addTodo: addTodoMutation.mutate,
    updateTodo: updateTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
    isAddingTodo: addTodoMutation.isPending,
    isUpdatingTodo: updateTodoMutation.isPending,
    isDeletingTodo: deleteTodoMutation.isPending,
  };
}
