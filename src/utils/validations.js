const validation = ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Enter your email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Invalid email address';
      }
    },

    fullname: (value) => {
      if (!value) {
        errors.fullname = 'Enter your fullname';
      } else if (!/^.{6,}$/.test(value)) {
        errors.fullname = 'At least 6 characters';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Enter password';
      } else if (
        !isAuth &&
        !/^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/i.test(
          value,
        )
      ) {
        errors.password = 'Weak password';
      }
    },
    password2: (value) => {
      if (!value) {
        errors.password2 = 'Repeat password';
      } else if (value !== values.password) {
        errors.password2 = "Passwords don't match";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validation;
