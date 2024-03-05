// npx jest

// Importar los modulos necesarios
import app from "../src/app";
import request from "supertest";

// Test de prueba/ejemplo
describe("GET /", () => {
  // Definir el test case con async par manejar operaciones asincronas como las HTTP request
  it("Responder con 'Test funcionando correctamente'", async () => {
    // Hacer la GET request con la URL configurada en app.ts
    const response = await request(app).get("/");

    // Log the response received from the server
    console.log("Response from server:", response.text);

    // Decirle que se espera que la respuesta sea la descrita en it()
    expect(response.text).toBe("Test funcionando correctamente");
  });
});
