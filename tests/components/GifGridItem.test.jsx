/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";

import { GifGridItem } from "../../src/components/GifGridItem";

describe("pruebas en componente <GifGridItem />", () => {
  //objeto para probar el componente
  const objImage = {
    title: "saitama sensei",
    url: "https://saitama.com/sensei",
  };

  /******************************/

  test("Debe hacer match con el snapshot", () => {
    //renderizamos el componente
    const { container } = render(<GifGridItem image={objImage} />);

    //realizamos la validacion
    expect(container).toMatchSnapshot();
  });

  /******************************/

  test("Debe de mostrar la imagen con el URL  yel ALT indicado", () => {
    //renderizamos el componente
    const { container } = render(<GifGridItem image={objImage} />);

    // //debug el componente
    // screen.debug();

    //destructuring de los atributos de img
    const { src, alt } = screen.getByRole("img");

    //evaluamos que el src de la imagen sea igual a la url pasada en el componete
    expect(src).toBe(objImage.url);

    //evalua que el alt de la iamgen sea igual al title
    expect(alt).toBe(objImage.title);
  });

  /******************************/

  test("Debe de mostrar el titulo en el componente", () => {
    //renderizamos el componente
    render(<GifGridItem image={objImage} />);
    expect(screen.getByText(objImage.title)).toBeTruthy();
  });
});
