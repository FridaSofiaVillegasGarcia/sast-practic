const express = require('express');
const app = express();

app.use(express.json());

// ❌ Hardcoded secret
const API_KEY = "ABC123SECRET";

// ❌ Simulación de base de datos
let users = [
    { id: 1, username: "admin", password: "admin123" },
    { id: 2, username: "user", password: "1234" }
];

// ❌ SQL Injection (simulado)
app.get('/user', (req, res) => {
    const id = req.query.id;

    const query = "SELECT * FROM users WHERE id = " + id;
    console.log("Ejecutando query:", query);

    res.send("Consulta ejecutada");
});

// ❌ Uso inseguro de eval()
app.post('/execute', (req, res) => {
    const code = req.body.code;

    try {
        eval(code); // ⚠️ PELIGRO
        res.send("Código ejecutado");
    } catch (err) {
        res.status(500).send("Error");
    }
});

// ❌ Autenticación insegura
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        res.cookie("session", user.username); // ❌ Cookie insegura
        res.send("Login exitoso");
    } else {
        res.status(401).send("Credenciales incorrectas");
    }
});

// ❌ Exposición de información sensible
app.get('/config', (req, res) => {
    res.json({
        apiKey: API_KEY,
        database: "mongodb://localhost:27017/test"
    });
});

// ❌ Falta de validación de entrada
app.get('/search', (req, res) => {
    const q = req.query.q;
    res.send("Buscando: " + q);
});

// ❌ Manejo de errores inseguro
app.get('/error', (req, res) => {
    throw new Error("Error interno del servidor"); // muestra stack
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
