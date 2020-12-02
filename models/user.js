const mongodb = require("mongodb");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  save() {}

  static findById(userId) {}
}

module.exports = User;
