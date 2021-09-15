import app from './app';

const PORT = process.env.PORT; //Variável de ambiente
app.listen(PORT);

console.log("Aplication started on port:", process.env.PORT);