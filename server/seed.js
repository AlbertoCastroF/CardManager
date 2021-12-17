const fs = require("fs"); //md5
const path = require("path"); //json-server
const faker = require("faker"); //faker
const md5 = require("md5"); //md5

function createCards(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    result.push({
      id: faker.datatype.uuid(),
      firstName,
      lastName,
      email,
      jobTitle: faker.name.jobTitle(),
      twitter: `${firstName}${lastName}${faker.address.zipCode()}`,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
    });
  }

  return result;
}

function main() {
  const data = {
    cards: createCards(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, "db.json"),
    JSON.stringify(data, null, 4)
  );
}

main();
