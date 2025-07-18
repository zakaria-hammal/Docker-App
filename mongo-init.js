db = db.getSiblingDB('titledb');

db.createCollection('titles');

const titles = [];
for (let i = 1; i <= 50; i++) {
  titles.push({ title: `Title ${i}`, index: i });
}

db.titles.insertMany(titles);
