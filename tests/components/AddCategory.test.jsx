/** @jest-environment jsdom */

import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("pruebas en <AddCategory />", () => {
  const inputValue = "Saitama";

  test("debe cambiar el valor de la caja de texto", () => {
    //se renderiza el componente
    render(<AddCategory onNewCategory={() => {}} />);

    //obtengo el input del componente
    const input = screen.getByRole("textbox");

    //dispara el evento de ingreso de valores (input), recibe dos parametros, el elemento que escucha el evento, y las opciones
    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });

    //esperamos que el valor del input sea igual a saitama (que fue el que se paso en el fireEvent)
    expect(input.value).toBe("Saitama");

    // //debug el componente
    // screen.debug();
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    //* jest function (MOOK)
    const onNewCategory = jest.fn();

    //renderizo el componente
    render(<AddCategory onNewCategory={onNewCategory} />);

    //capturo el input y el form
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //cambiamos el valor de la caja de texto (input)
    fireEvent.input(input, {
      target: {
        value: inputValue,
      },
    });

    //disparamos el evento enviar formulario
    fireEvent.submit(form); //para probar que si lo ejecuta, se puede poner un console.log en el componente, y en la prueba se debe ver ese log

    //validamos que despues de enviar el formulario, el valor del input se vacie
    expect(input.value).toBe("");

    // valida que la funcion de tipo jest llamada onNewCategory, alla sido llamada al enviar el formulario (ya que es hay donde se debe ejecutar)
    expect(onNewCategory).toHaveBeenCalled();

    //espera que la funcion onNewCategory sea llamada 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    //espera que la funcion se llame con el valor ingresado en el input
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    // //debug el componente
    // screen.debug();
  });

  test("No debe de llamar el onNewCategory si el input es vacio", () => {
    //* jest function (MOOK)
    const onNewCategory = jest.fn();

    //renderizo el componente
    render(<AddCategory onNewCategory={onNewCategory} />);

    //capturo el formulario
    const form = screen.getByRole("form");

    //disparamos el evento enviar formulario
    fireEvent.submit(form);

    //espera que la funcion onNewCategory NO sea llamado
    expect(onNewCategory).not.toHaveBeenCalled();

    // //debug el componente
    // screen.debug();
  });
});
