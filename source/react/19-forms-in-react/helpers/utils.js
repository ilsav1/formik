import * as yup from 'yup';
import classNames from 'classnames';

export const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const toggleErrorClass = (isError, cssClass) => classNames({ [cssClass]: isError });

