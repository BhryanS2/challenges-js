class Funcionario {
  constructor(nome, dataContratacao) {
    this.nome = nome;
    this.dataContratacao = dataContratacao;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getDataContratacao() {
    return this.dataContratacao;
  }

  setDataContratacao(dataContratacao) {
    this.dataContratacao = dataContratacao;
  }
}

class Pf extends Funcionario {
  constructor(nome, dataContratacao, cpf, salario, beneficios) {
    super(nome, dataContratacao);
    this.cpf = cpf;
    this.salario = salario;
    this.beneficios = beneficios;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  getSalario() {
    return this.salario;
  }

  setSalario(salario) {
    this.salario = salario;
  }

  getBeneficios() {
    return this.beneficios;
  }

  setBeneficios(beneficios) {
    this.beneficios = beneficios;
  }
}

class Pj extends Funcionario {
  constructor(nome, dataContratacao, cnpj, salario) {
    super(nome, dataContratacao);
    this.cnpj = cnpj;
    this.salario = salario;
  }

  getCnpj() {
    return this.cnpj;
  }

  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  getSalario() {
    return this.salario;
  }

  setSalario(salario) {
    this.salario = salario;
  }
}

const funcionario = new Funcionario("Naruto", "10/10/2000");
const pf = new Pf("Sasuke", "10/10/2000", "123.456.789-00", 1000, "beneficios");
const pj = new Pj("Kakashi", "10/10/2000", "123.456.789-00", 1000);
console.log("funcionario: ");
console.log(funcionario.getNome());
console.log(funcionario.getDataContratacao());

console.log("\n\npf: ");
console.log(pf.getNome());
console.log(pf.getDataContratacao());
console.log(pf.getCpf());
console.log(pf.getSalario());
console.log(pf.getBeneficios());

console.log("\n\npj: ");
console.log(pj.getNome());
console.log(pj.getDataContratacao());
console.log(pj.getCnpj());
console.log(pj.getSalario());
