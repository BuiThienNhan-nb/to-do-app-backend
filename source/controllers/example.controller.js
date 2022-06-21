const example = function (req, res) {
  const test = [
    {
      name: "test-1",
      description: "test description for example-1",
    },
    {
      name: "test-2",
      description: "test description for example-2",
    },
  ];
  res.json(test);
};

export const exampleController = {
  example: example,
};
