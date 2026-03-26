// ❌ Hardcoded secret
const password = "123456";

// ❌ Uso peligroso
function ejecutar(codigo) {
    eval(codigo);
}

// ❌ SQL Injection
function getUser(id) {
    const query = "SELECT * FROM users WHERE id = " + id;
    console.log(query);
}
