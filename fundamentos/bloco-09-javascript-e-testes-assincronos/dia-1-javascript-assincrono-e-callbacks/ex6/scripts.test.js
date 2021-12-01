const { expect } = require("@jest/globals");
const uppercase = require("../ex6/scripts.js");

it("Verifica se o resultado está em caixa alta", (done) => {
  uppercase("Xablau", (result) => {
    try {
      expect(result).toBe("XABLAU");
      done();
    } catch (error) {
      done(error);
    }
  });
});
