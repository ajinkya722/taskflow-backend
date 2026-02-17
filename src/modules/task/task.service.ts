type Task = {
  id: string;
  title: string;
  description?: string;
  status: "PENDING" | "IN_PROGRESS" | "DONE";
};

const tasks: Task[] = [];

export const createTask = (data: { title: string; description?: string }) => {
  const task: Task = {
    id: crypto.randomUUID(),
    title: data.title,
    description: data.description,
    status: "PENDING",
  };
  tasks.push(task);
  return task;
};

export const getTasks = async () => {
  throw new Error("Async crash test");
  return tasks;
};

