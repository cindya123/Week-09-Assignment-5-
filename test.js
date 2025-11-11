const { validateEmail, validatePassword } = require('./main');

// describe("validateEmail()", () => {

//   // ✅ Valid tests
//   test("valid email – normal", () => {
//     expect(validateEmail("user@example.com")).toBe(true);
//   });

//   test("valid email – subdomain", () => {
//     expect(validateEmail("john.doe@sub.domain.co")).toBe(true);
//   });

  // ❌ Invalid tests
  test("invalid – missing @", () => {
    expect(validateEmail("invalidemail.com")).toBe(false);
  });

//   test("invalid – missing TLD", () => {
//     expect(validateEmail("user@domain")).toBe(false);
//   });
// });

// describe("validatePassword()", () => {

//   // ✅ Valid tests
//   test("valid password – uppercase + number", () => {
//     expect(validatePassword("StrongPass1")).toBe(true);
//   });

//   test("valid password – long + number", () => {
//     expect(validatePassword("HelloWorld2025")).toBe(true);
//   });

//   // ❌ Invalid tests
//   test("invalid – too short", () => {
//     expect(validatePassword("Abc12")).toBe(false);
//   });

//   test("invalid – no uppercase", () => {
//     expect(validatePassword("weakpassword1")).toBe(false);
//   });
// });


// describe("Intentional Break Test", () => {
//   test("this should fail intentionally", () => {
//     expect(1 + 1).toBe(3); // wrong on purpose
//   });
});
