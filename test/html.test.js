import { describe, expect, test, beforeEach } from "vitest";

describe("Estructura HTML", () => {
  test("Título de la página", () => {
    const title = document.querySelector("title");
    expect(title.textContent).toBe("Login");
  });

  test("Encabezado principal", () => {
    const mainHeader = document.querySelector("h1#main-header");
    expect(mainHeader).toBeTruthy();
    expect(mainHeader.textContent).toBe("Bienvenido");
  });

  describe("Formulario de contacto", () => {
    let form;

    beforeEach(() => {
      form = document.querySelector("form#contact");
    });

    test("Contenedor principal del formulario", () => {
      expect(form).toBeTruthy();
      expect(form.getAttribute("method")).toBe("post");
      expect(form.getAttribute("action")).toBe("/submit");
    });

    describe("Campo de correo electrónico", () => {
      test("Contenedor del input", () => {
        const container = form.querySelector("div:first-child");
        expect(container).toBeTruthy();
      });

      test("Label correcto", () => {
        const label = form.querySelector('label[for="email"]');
        expect(label).toBeTruthy();
        expect(label.textContent).toBe("Correo electrónico:");
      });

      test("Input con atributos correctos", () => {
        const input = form.querySelector("#email");
        expect(input).toBeTruthy();
        expect(input.getAttribute("type")).toBe("email");
        expect(input.getAttribute("name")).toBe("email");
        expect(input.getAttribute("placeholder")).toBe("ejemplo@correo.com");
        expect(input.hasAttribute("required")).toBe(true);
      });
    });

    describe("Campo de contraseña", () => {
      test("Contenedor del input", () => {
        const container = form.querySelector("div:nth-child(2)");
        expect(container).toBeTruthy();
      });

      test("Label correcto", () => {
        const label = form.querySelector('label[for="password"]');
        expect(label).toBeTruthy();
        expect(label.textContent).toBe("Contraseña:");
      });

      test("Input con atributos correctos", () => {
        const input = form.querySelector("#password");
        expect(input).toBeTruthy();
        expect(input.getAttribute("type")).toBe("password");
        expect(input.getAttribute("name")).toBe("password");
        expect(input.getAttribute("placeholder")).toBe("••••••••");
        expect(input.hasAttribute("required")).toBe(true);
      });
    });

    test("Botón de envío", () => {
      const button = form.querySelector('button[type="submit"]');
      expect(button).toBeTruthy();
      expect(button.textContent).toBe("Enviar");
    });
  });
});
