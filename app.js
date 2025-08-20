const fs = require("fs");
const bcrypt = require("bcrypt");

async function saveUsers() {
  const users = [
    { username: "admin", password: "1234" }
  ];

  for (let user of users) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
  console.log("Users saved securely!");
}

saveUsers();
