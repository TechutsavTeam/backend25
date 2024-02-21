module.exports.handleError = (err) => {
  let errors = {
    email: "",
    password: "",
    phone: "",
    fullName: "",
    collegeName: "",
    department: "",
  };

  if (err.code === 11000) {
    errors.email = "This Email is already Registered";
    return errors;
  }

  if (err.message === "Invalid Email") {
    errors.email = "This Email is Invalid";
  }

  if (err.message === "Invalid Password") {
    errors.password = "This Password is Invalid";
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
