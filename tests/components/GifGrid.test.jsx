/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
//importo el hook personalizado useFetchGifs
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//creamos un mock completo del hook personalizado useFetchGifs
jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "One punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    //renderizo el componente
    render(<GifGrid category={category} />);

    //espero que el componente tenga el cargando y la categoria a buscar, en este caso, One punch
    expect(screen.getByText("Cargando ..."));
    expect(screen.getByText(category));

    // screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imagenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "saitama",
        url: "https:://saitama.com/saitamasensei.jpg",
      },
      {
        id: "123",
        title: "koku",
        url: "https:://koku.com/kokuposeidoporlosmismisimosdioses.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    //renderizo el componente
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);

    screen.debug();
  });
});
