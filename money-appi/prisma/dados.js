import prismaClient from "../src/services/database.js";

const dadosCategorias = [
  {
    categoria: "Carro",
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png",
  },
  {
    categoria: "Casa",
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png",
  },
  {
    categoria: "Lazer",
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png",
  },
  {
    categoria: "Mercado",
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png",
  },
  {
    categoria: "Educação",
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png",
  },
  {
    categoria: "Viagem",
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
  },
];

const CarregarDados = async () => {
  try {
    await prismaClient.categoria.createMany({
      data: dadosCategorias,
    });
    console.log("Carga finalizada");
  } catch (error) {
    console.log("Erro na carga:");
    console.log(error);
  }
};

CarregarDados();
