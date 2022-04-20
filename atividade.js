const nome = prompt("Ola, digite seu nome: ");
const idade = prompt (`${nome}, digite sua idade: `);

idade>= 18 ? alert(`${nome}, você pode comprar bebida!`) : alert(`${nome}, você não pode comprar bebida.`);