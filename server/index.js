const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use('/', (req, res) => {
    res.send("Server is running.");
});

app.listen(PORT, () => console.log(`Server is Alive on port: ${PORT}`))