export function isValidEmail(email) {
  // Regular expression for a valid email address
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the provided email against the pattern
  return emailPattern.test(email);
}

export function isValidPhoneNumber(phoneNumber) {
  // Regular expression for a valid Sri Lankan phone number
  const phonePattern = /^(?:\+94|0)([1-9][0-9]{8})$/;

  // Test the provided phone number against the pattern
  return phonePattern.test(phoneNumber);
}
