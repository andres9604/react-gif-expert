import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("pruebas en hook useFetchGifs", () => {
  test("debe de regresar el estado inicial ", () => {
    //renderizamos el hook
    const { result } = renderHook(() => useFetchGifs("One punch"));
    //console.log(result);

    //desestructuramos el result del hook
    const { images, isLoading } = result.current;

    //esdperamos que el array de imagenes sea 0 (porque se inicializa como un array vacio) y que el isLoading sea true,
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y el isLoading en false ", async () => {
    //renderizamos el hook
    const { result } = renderHook(() => useFetchGifs("One punch"));
    //console.log(result);

    //espera a que el resultado de las imagenes sea mayor a 01, retorne algo
    //se le puede especificar el timeout que debe esperar el waitFor para la respuesta
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
      // {
      //   timeout: 5000,
      // }
    );

    //desestructuramos el result del hook
    const { images, isLoading } = result.current;

    //esperamos que el array de imagenes sea  mayor a 0 (porque se ejecuto el fetch y debe dar respuesta) y el isLoading en false
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
