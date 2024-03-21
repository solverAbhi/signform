const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://saraswattabhii:abhishek@cluster0.k5kq5ej.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .catch((error) => handleError(error));
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  accessToken: String,
});
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
