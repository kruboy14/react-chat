import axios from 'axios';
import { withFormik } from 'formik';

import { openNotification } from '../../../utils/helpers';
import validation from '../../../utils/validations';
import LoginForm from '../components/LoginForm';

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values) => {
    const errors = {};

    validation({ isAuth: true, values, errors });

    return errors;
  },

  handleSubmit: async (values, { setSubmitting }) => {
    try {
      const { data } = await axios.post('/user/login', values);
      setSubmitting(false);
      // localStorage.token = data.token;
      openNotification({
        title: 'Success',
        text: 'Successful Authorization',
        type: 'success',
      });
    } catch (error) {
      if (error.response.status === 403) {
        openNotification({
          title: 'Error',
          text: 'Wrong password or email',
          type: 'error',
        });
      }
    }
  },

  displayName: 'LoginForm',
})(LoginForm);
