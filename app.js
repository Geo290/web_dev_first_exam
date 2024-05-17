const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//END POINT
app.get('/', (req, res) => {
    res.json({
        "ID": 1,
        "Nombre": "Pablo",
        "Apellido": "Escobar",
        "Destino": "Cartagena",
        "Fecha": "2024-01-01",
        "X_Y_Z": "X: 1 Y: 2 Z: 3",
    });
});

// app.post('/', ())

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});