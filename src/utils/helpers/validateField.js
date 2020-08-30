const validate = (key, touched, errors) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error';
    }
  } else {
    return '';
  }
};

export default validate;
