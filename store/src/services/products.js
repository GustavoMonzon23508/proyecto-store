const BASE_URL = "https://692dd91ee5f67cd80a4d3120.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async(category) => {
  let url = BASE_URL;
  if (category) {
    url = `${BASE_URL}?category=${category}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al listar productos");
  }

  const result = await res.json();
  return result;
};
//traer uno x id
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener producto");
  }
  return await res.json();

};