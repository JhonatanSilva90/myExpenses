import prismaClient from "../services/database.js";

const Listar = async (request, response) => {
  const cat = await prismaClient.categoria.findMany();
  return response.json(cat);
};

export default { Listar };
