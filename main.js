function validateEmail(email) {
    if (typeof email !== "string") return false;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return pattern.test(email.trim());
  }
  
  function validatePassword(password) {
    if (typeof password !== "string") return false;
    const trimmed = password.trim();
    const isLongEnough = trimmed.length >= 8;
    const hasUppercase = /[A-Z]/.test(trimmed);
    const hasNumber = /\d/.test(trimmed);
    return isLongEnough && hasUppercase && hasNumber;
  }
  
  module.exports = { validateEmail, validatePassword };
  