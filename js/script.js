exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}, `;
  }
};

exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let o = 0; o < document.getElementById("num").value; o += 2)
    document.getElementById("resposta").innerHTML += `#${o}`;
};

exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Informar número válido, o número ${num} não é positvo.`;
    resultado.innerText = "";
  } else {
    error.innerText = "";
    resultado.innerText = "";
    let primo = true; //Declarei variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (resultado.innerText = `O número ${num} é primo!`)
      : (error.innerText = `O número ${num} não é primo!`);
  }
};

exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resposta = document.getElementById("resultado");

  switch (true) {
    case num <= 0:
      {
        error.innerText = "Insira um número positivo";
      }
      break;
    case num > 0:
      {
        resposta.innerHTML = "";
        for (let i = 0; i <= 10; i++) {
          result = num * i;
          resposta.innerHTML += `${num}X${i}=${result} <br/>`;
          console.log(result);
        }
      }

      break;

    default:
      {
        error.innerText = result;
      }
      break;
  }
};

exercicio5 = () => {
  document.getElementById("erro").innerText = "";
  document.getElementById("resultado").innerText = "";
  let valor = document.getElementById("num").value;
  let contador = 0;
  if (valor <= 0) {
    document.getElementById("erro").innerText = `Insira um valor valido`;
  }
  while (contador <= valor) {
    if (contador % 2 != 0) {
      document.getElementById("resultado").innerText += `#${contador}`;
    }
    contador++;
  }
};

exercicio6 = () => {
  let o = 0;
  let num = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  let error = document.getElementById("erro");
  resultado.innerText = "";
  error.innerText = "";
  if (num <= 0) {
    error.innerText = "Error";
  } else {
    while (o < num) {
      resultado.innerText += `#${o}`;
      o += 2;
    }
  }
};

exercicio7 = () => {
  let p = 10;
  let resultado = document.getElementById("resposta");
  resultado.innerText = "";
  while (p > 0) {
    console.log(p);
    resultado.innerText += `#${p}`;
    p--;
  }
};

exercicio8 = () => {
  document.getElementById("resultado").innerText = ``;
  document.getElementById("erro").innerText = ``;
  let valor = document.getElementById("palavra").value;
  const palavras = valor.split("");
  const palavrasinv = [];
  for (let i = palavras.length; i >= 0; i--) {
    palavrasinv.push(palavras[i]);
  }

  if (palavras.join("") == palavrasinv.join("")) {
    document.getElementById("resultado").innerText =
      "Essa palavra é um palíndromo";
  } else {
    document.getElementById("erro").innerText =
      "Essa palavra não é um palíndromo";
  }
}
  exercicio9 = () => {
    let soma = 0;
    let resuntado = document.getElementById("resposta");
    for (let i = 1; i <= 100; i++) {
      soma += i;
      resuntado.innerHTML = `O valor da soma é de ${soma}`;
    }
  };


exercicio10 = () => {
  let num = document.getElementById("num").value;
  let resposta = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;
  let soma = 0;
  resposta.innerHTML = "";
  error.innerHTML = "";

  if (num <= 0) {
    error.innerText = "Insira um número positivo";
  } else {
    while (contador <= num) {
      soma += contador;
      contador++;
    }
    let media = soma / num;
    resposta.innerHTML += `A soma é ${soma}<br/>`;
    resposta.innerHTML += `A média é ${media}`;
  }
};

exercicio11 = () => {
  let resuntado = document.getElementById("resposta");

  for (let multi = 1; multi <= 100; multi++) {
    if (multi % 3 == 0) {
      resuntado.innerHTML += `${multi} <br/>`;
    }
  }
};

exercicio12 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let soma = 0;
  error.innerText = "";
  resultado.innerText = "";

  let sos = [];
  for (let i = 0; i < num.toString().length; i++) {
    sos.push(Number(num.toString()[i]));
    soma += sos[i];
  }
  if (num < 10) {
    error.innerText = `Insira um número com dois digitos`;
  } else {
    resultado.innerText = soma;
  }
};
//13
const verificaprimo = (numero) => {
  if (numero <= 1) {
    return false;
  }

  let primo = true;
  for (let m = 2; m * m <= numero; m++) {
    if (numero % m === 0) {
      primo = false;
      break;
    }
  }
  return primo;
};
exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let min = document.getElementById("num1").value;
  min = Math.round(min);
  let max = document.getElementById("num2").value;
  max = Math.round(max);

  const numEntre = [];
  let erro = document.getElementById("erro");
  if (min < 0 || max < -0 || min >= max) {
    error.innerText = "Erro: insira um número positivo e diferente do outro ";
    error.innerText = "";
  } else {
    for (let m = min; m < max; m++) {
      let numEntre = verificaprimo(m);
      if (numEntre) {
        resultado.innerHTML += `<h3>#${m}</h3>`;
      }
    }
  }
};

exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  error.innerText = "";
  resultado.innerText = "";

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `Insira um número positivo`;
  } else {
    result = num1 * num2;
    resultado.innerHTML = result;
  }
};

exercicio15 = () => {
  let pala = document.getElementById("palavra").value;
  document.getElementById("resultado").innerText = "";
  document.getElementById("erro").innerText = "";
  console.log(pala.length);
  let vog = [`a`, `e`, `i`, `o`, `u`];
  let consoante = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  pala = pala.toLowerCase();
  if (pala == "") {
    document.getElementById("erro").innerText = `Favor informar uma palavra`;
  }
  for (let i = 0; i < pala.length; i++) {
    for (let l = 0; l < vog.length; l++) {
      if (pala.charAt(i) == vog[l]) {
        document.getElementById("resultado").innerText += ` #${pala.charAt(i)}`;
      }
    }
    for (let z = 0; z < consoante.length; z++) {
      if (pala.charAt(i) == consoante[z]) {
        document.getElementById("erro").innerText += ` #${pala.charAt(i)}`;
      }
    }
  }
};

exercicio16 = () => {
  let pi = 3.14;
  let num1 = document.getElementById("num1").value;
  let resultado = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num1 <= 0) {
    error.innerText = `Insira um número positivo`;
  } else {
    let conta = num1 * num1;
    let area = pi * conta;
    console.log(area);
    resultado.innerHTML = `${area}cm²`;
  }
};

exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  error.innerText = "";
  resultado.innerText = "";

  if (num1 <= 0 && num2 <= 0) {
    error.innerText = `Insira um número positivo`;
  } else {
    result = num1 * num2;
    resultado.innerHTML = result / 2;
  }
};

exercicio18 = () => {
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let num3 = document.getElementById("num3").value * 1;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  error.innerText = "";
  resultado.innerText = "";

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerText = `Insira um número positivo`;
  } else {
    adicao = num1 + num2;
    console.log(adicao);
    result = adicao * num3;
    console.log(result);
    resultado.innerHTML = `${result / 2} cm²`;
  }
};

exercicio19 = () => {
  let nascimento = new Date(document.getElementById("data").value);
  let atual = new Date();
  let error = document.getElementById("erro");
  let resposta = document.getElementById("resposta");

  console.log(atual);
  console.log(nascimento);
  if (nascimento == "") {
    error.innerText = `Insira sua data de nascimento`;
  } else {
    if (
      nascimento.getMonth() < atual.getMonth() ||
      (nascimento.getMonth() == atual.getMonth &&
        nascimento.getDate() < atual.getDate())
    ) {
      document.getElementById("resultado").innerText = `${
        atual.getFullYear() - nascimento.getFullYear() - 1
      }`;
    } else {
      document.getElementById("resultado").innerText = `${
        atual.getFullYear() - nascimento.getFullYear()
      }`;
    }
  }
};

exercicio20 = () => {
  document.getElementById("erro").innerText = ``;
  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  let inv = [];
  if (valor == "") {
    document.getElementById("erro").innerText = ``;
  }
  for (let i = frase.length; i >= 0; i--) {
    inv.push(frase[i]);
  }
  document.getElementById("resultado").innerText = `${inv.join(" ")}`;
};

exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  error.innerHTML = "";

  if (frase == "") {
    error.innerHTML = "Insira uma frase válida";
  } else {
    let fraseSemEspacos = frase.replace(/ /g, "");
    console.log(fraseSemEspacos);
    resultado.innerHTML = `${fraseSemEspacos}`;
  }
};

var soma = 0;
exercicio22 = () => {
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let valor = document.getElementById("num").value * 1;
  error.innerHTML = ""
  resultado.innerHTML = ""
  if (valor <= 0) {
    error.innerHTML = `Insira um valor postivo`;
  } else if (soma <= 100) {
    soma += valor;
    resultado.innerHTML = `#${soma}`;
  } else if (soma > 100) {
    error.innerText = `A soma deu maior que 100`;
  }
};

exercicio23 = () => {
  let frase = document.getElementById("frase").value;
  let pala = document.getElementById("palavra").value;
  frase = frase.toLowerCase();
  palavra = pala.toLowerCase();
  let corte = frase.split(" ");
  let contador = 0;
  console.log(corte);
  if (frase == "" || palavra == "") {
    document.getElementById("erro").innerText =
      "Escreva uma frase e uma palavra";
  } else {
    for (let i = 0; i < corte.length; i++) {
      if (corte[i] == palavra) {
        contador++;
      }
    }
    document.getElementById(
      "resultado"
    ).innerText = `O número de vezes que ${pala} aparece é ${contador};`;
  }
};

exercicio24 = () => {
    let resultado = document.getElementById("resultado");
  
    let valor = document.getElementById("frase").value;
    let frase = valor.split(" ");
    const array = [];
  
    let erro = document.getElementById("erro");
  
    if (valor == "") {
      erro.innerText = "Coloque um título!";
      resultado.innerHTML = "";
    } else {
      erro.innerText = "";
      const fraseMod = frase.map((palavra) => {
        //Utilizei o map para retornar o array com os transofrmações feitas pela função
        const primeiraLetra = palavra[0].toUpperCase(); //Acessa o primeiro caractere da palavra
        array.push(primeiraLetra); //Adiciona as letras maiúsculas na array primeirasLetras
        return primeiraLetra + palavra.slice(1); // Substituindo a primeira letra pela versão maiúscula
      });
      resultado.innerHTML = `<h1>${fraseMod.join(" ")}</h1>`;
    }
  };

exercicio25 = () => {
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let resultado = document.getElementById("resultado");
  error.innerHTML = "";
  resultado.innerHTML = "";
  let array = [];
  array.push(num1);
  array.push(num2);
  array.push(num3);
  array.sort((a, b) => a - b);
  console.log(array);
  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerHTML = "Insira os números";
  } else {
    for (let i = 0; i <= 2; i++) {
      resultado.innerText += `# ${array[i]} `;
    }
  }
};