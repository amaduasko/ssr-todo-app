const mongoose = require("mongoose");
dbPath ="";
mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(" db connected"))
  .catch(err => console.log("caught: ", err));

module.exports = mongoose;
