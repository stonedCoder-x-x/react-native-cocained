let emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let fullNameValidation = /^[a-zA-Z _]+$/;
let onlyNumbersValidation = /^\d+$/;

let errors = [
  {
    fullNameErr: "Name should not contain numbers or special characters",
    phoneErr: "Phone number should only contain numbers",
    passErr: "Password should be minimum of 6 chars",
    confirmPassErr: "Password not matching",
    emailErr: "Wrong email format",
    adhaarErr: "Adhaar number is not valid",
    onlyNumberErr: "Should only be numeric",
    specialCharsErr: "Should not contain special characters or numbers"
  }
];

const InputValidations = {
  validationNoSpecialChars: function(text, callBack, errorType) {
    if (fullNameValidation.test(text)) {
      callBack(true, "");
    } else {
      callBack(false, errors[0].specialCharsErr);
    }
  },

  validationUserName: function(text, callBack, errorType) {
    if (fullNameValidation.test(text)) {
      callBack(true, "");
    } else {
      switch (errorType) {
        case "specialChars":
          callBack(false, errors[0].specialCharsErr);
          break;

        default:
          callBack(false, errors[0].fullNameErr);
          break;
      }
    }
  },

  validatePassword: function(text, callBack) {
    if (text.length < 6) {
      callBack(false, errors[0].passErr);
    } else {
      callBack(true, "");
    }
  },

  validateEmail: function(text, callBack) {
    if (emailValidation.test(text)) {
      callBack(true, "");
    } else {
      callBack(false, errors[0].emailErr);
    }
  },

  validatePhone: function(text, callBack) {
    if (/*text.length == 10 &&*/ onlyNumbersValidation.test(text)) {
      callBack(true, "");
    } else {
      callBack(false, errors[0].phoneErr);
    }
  },

  validateOnlyNumerics: function(text, callBack) {
    if (onlyNumbersValidation.test(text)) {
      callBack(true, "");
    } else {
      callBack(false, errors[0].onlyNumberErr);
    }
  },

  returnError: function() {
    return errors[0];
  }
};

export default InputValidations;
