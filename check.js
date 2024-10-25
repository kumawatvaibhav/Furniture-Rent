const bcrypt = require('bcrypt');

// Test password
const testPassword = 'qwerty123';

// Hash the password
bcrypt.hash(testPassword, 10, (err, hashedPassword) => {
  if (err) throw err;

  console.log("Hashed password:", hashedPassword);

  // Compare the password
  bcrypt.compare(testPassword, hashedPassword, (err, result) => {
    if (err) throw err;
    console.log("Password match result:", result);  // Should print true
  });
});
