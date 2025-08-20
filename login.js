const fs = require("fs");
const bcrypt = require("bcrypt");
const readline = require("readline");

const users = JSON.parse(fs.readFileSync("users.json"));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ange användarnamn: ", (username) => {
  rl.question("Ange lösenord: ", async (password) => {
    const user = users.find(u => u.username === username);
    if (!user) {
      console.log("Fel användarnamn!");
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        console.log("Inloggning lyckades! ✅");
      } else {
        console.log("Fel lösenord! ❌");
      }
    }
    rl.close();
  });
});
