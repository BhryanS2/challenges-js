const Pessoa = {
  nome: "Naruto",
  idade: 21,
  getNome() {
    return this.nome;
  },
  setNome(nome) {
    this.nome = nome;
  },
  getIdade() {
    return this.idade;
  },
  setIdade(idade) {
    this.idade = idade;
  },
};

console.log(Pessoa.getNome());
console.log(Pessoa.getIdade());

Pessoa.setNome("Sasuke");
Pessoa.setIdade(22);

console.log(Pessoa.getNome());
console.log(Pessoa.getIdade());
