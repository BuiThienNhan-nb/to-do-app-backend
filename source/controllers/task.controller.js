const testShowTask = function (req, res) {
  const test = [
    {
      name: "test-1",
      description: "test description for task-1",
    },
    {
      name: "test-2",
      description: "test description for task-2",
    },
  ];
  res.json(test);
};

export const taskController = {
  testShowTask: testShowTask,
};
