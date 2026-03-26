// Ejemplo con vulnerabilidades

// ❌ Hardcoded secret
const password = "123456";

// ❌ Uso inseguro de eval
function ejecutar(codigo) {
    eval(codigo);
}

// ❌ Simulación de SQL Injection
function getUser(id) {
    const query = "SELECT * FROM users WHERE id = " + id;
    console.log(query);
}