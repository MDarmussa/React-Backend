const express = require('express');

const PORT = process.env.port || 3001;

const app = express();

app.get("/api", (req, res) => {
     res.json({ message: "hello from server" });
     //connectigng to my DB model
     //Getting a collection/label
     //send that data as the JSON response
   });

app.get('/users/42', (req, res) => {
     const aUser = {
          firstName: 'luke',
          lastName: 'skywalker',
          age: 32,
          favColor: 'skyblue'
     }
     res.json(aUser)
})

app.listen(PORT, () => {
     console.log(`Server is listening on http://localhost:${PORT}`);
})