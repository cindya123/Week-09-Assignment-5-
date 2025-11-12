const { validateEmail, validatePassword } = require("./main");

// ✅ Valid #1
test("valid email format", () => {
  expect(validateEmail("user@example.com")).toBe(true);
});

// // ✅ Valid #2
// test("valid password format", () => {
//   expect(validatePassword("StrongPass1")).toBe(true);
// });

// // ❌ Invalid #1 (should PASS by returning false)
// test("invalid email missing @", () => {
//   expect(validateEmail("invalidemail.com")).toBe(false);
// });

// // ❌ Invalid #2 (should PASS by returning false)
// test("invalid password missing uppercase", () => {
//   expect(validatePassword("weakpassword1")).toBe(false);
// });

// // 💥 Intentional break (forces overall failure)
// test("intentional fail", () => {
//   expect(2 + 2).toBe(5); // wrong on purpose
});
