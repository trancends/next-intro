import TodoList from "@/components/TodoList";
import prisma from "@/utils/db";

const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  const todos = await prisma.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <h1>Todos Page</h1>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodosPage;
