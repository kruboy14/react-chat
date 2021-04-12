import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    password2: '',
  }),
  validate: (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.username) {
      errors.username = 'Required';
    } else if (!/^.{6,}$/.test(values.username)) {
      errors.username = 'At least 6 characters';
    }
    if (!values.password) {
      errors.password = 'Enter password';
    } else if (
      !/^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/i.test(
        values.password,
      )
    ) {
      errors.password = 'weak password';
    }

    if (!values.password2) {
      errors.password2 = 'Repeat password';
    } else if (values.password2 !== values.password) {
      errors.password2 = "passwords don't match";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 5000);
  },

  displayName: 'BasicForm',
})(RegisterForm);
