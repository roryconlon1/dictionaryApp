use words;
db.dropDatabase();

db.definition.insertMany([
  {
    word: "Hello ",
    description: "A greeting",
  },
  {
    word: "Job",
    description: "A task.",
  },
  {
    species: "Little Egret",
    location: "Seamill",
    date: "2018-08-15"
  }
]);