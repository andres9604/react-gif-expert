import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGifs()", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One punch");

    console.log(gifs);

    //definimos que el arreglo debe ser mayor a 0 (traiga resultados)
    expect(gifs.length).toBeGreaterThan(0);

    //validamos que el objeto del arreglo gifs tenga la estructura adecuada (id, title, url9)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
