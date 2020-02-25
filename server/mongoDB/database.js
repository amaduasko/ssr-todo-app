const mongoose = require("mongoose");
dbPath =
  "mongodb+srv://sorcier:sorcier55@phdb-atyvn.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(" db connected"))
  .catch(err => console.log("caught: ", err));

module.exports = mongoose;
