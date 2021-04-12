import { withFormik } from 'formik';
import validation from '../../../utils/validations';
import LoginForm from '../components/LoginForm';

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validate: (values) => {
    const errors = {};

    validation({ isAuth: true, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);
