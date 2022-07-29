const Pessoa = {
  nome: "Naruto",
  idade: 21,
  sexo: "M",
  cpf: "123.456.789-00",
  dataNascimento: "10/10/2000",
  altura: 1.75,
};

for (const key in Pessoa) {
  console.log(`A chave "${key}" possui o valor "${Pessoa[key]}"`);
}
