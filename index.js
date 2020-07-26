const express = require("express");
const bodyParser = require("body-parser")
const userRoute = require('./routes/userRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.listen(port, () => {
    console.log(`Express rodando na porta ${port}`);
});

app.get('/', (req, res) => {
    res.send("Olá mundo pelo express")
});  