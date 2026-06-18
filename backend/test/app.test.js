const request =
require("supertest");

const app =
require("../app");

describe("Health API",()=>{

test("GET /",async()=>{

const response =
await request(app)
.get("/");

expect(response.statusCode)
.toBe(200);

});

});
