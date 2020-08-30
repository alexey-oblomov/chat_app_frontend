export default ({isAuth, values, errors}) => {
  const rules = {
    email: (errors, value) => {
      if (!value.email) {
        errors.email = 'Введите email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неверный email';
      }
    },

    password: (errors, value) => {
      if (!value.password) {
        errors.password = 'Введите пароль';
      } else if (!/(?=.*[a-zA-Z0-9])/i.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий';
      }
    },
  };
  Object.keys(values).forEach(key => rules[key] && rules[key](errors, values[key]));
};
