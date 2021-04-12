import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validation from 'utils/validations';

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    password2: '',
  }),
  validate: (values) => {
    const errors = {};

    validation({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
