const { validateEmail, validatePassword } = require("./main");

// test("valid email format", () => {
//   expect(validateEmail("user@example.com")).toBe(true);
// });

// test("valid password format", () => {
//   expect(validatePassword("StrongPass1")).toBe(true);
// });

// test("invalid email missing @", () => {
//   expect(validateEmail("invalidemail.com")).toBe(false);
// });

// test("invalid password missing uppercase", () => {
//   expect(validatePassword("weakpassword1")).toBe(false);
// });

test("intentional fail", () => {
  expect(2 + 2).toBe(5); 
});
