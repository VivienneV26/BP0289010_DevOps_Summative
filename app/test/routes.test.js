const request = require("supertest");
const app = require("../server");

describe("Web application", () => {

  test("GET / returns the CI/CD demo page", async () => {

    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("DevOps Summative BP0289010");
    expect(response.text).toContain("Welcome to my CI/CD Demo!");
  });

  test("GET /health reports that the application is available", async () => {

    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

});
