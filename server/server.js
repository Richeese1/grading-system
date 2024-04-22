const express = require("express");
const MongoClient = require("mongodb").MongoClient; // Import MongoClient
const cors = require("cors");
const bodyParser = require("body-parser"); // Use body-parser for parsing request body

const app = express();
const port = 3002;

// Replace with your actual MongoDB connection URI
const uri = "mongodb://127.0.0.1:27017/grading-system"; // Database connection string

app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    const db = client.db("grading-system"); // Access the database

    // Login endpoint
    app.post("/login", async (req, res) => {
      const username = req.body.LoginUserName;
      const password = req.body.LoginPassword;

      try {
        const usersCollection = db.collection("users"); // Access the collection
        const user = await usersCollection.findOne({ username }); // Find user by username

        if (!user) {
          return res.send({ message: "Credentials Don't Match!" });
        }

        // Password hashing and comparison logic (replace with your hashing mechanism)
        // const isPasswordMatch = await bcrypt.compare(password, user.password);
        // if (!isPasswordMatch) {
        //   return res.send({ message: "Credentials Don't Match!" });
        // }

        // If credentials match, send the user data (excluding password)
        res.send({ ...user, password: undefined }); // Omit password from response
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
