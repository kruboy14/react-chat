const validStatus = (key, touched, errors) =>
  !touched[key] ? '' : errors[key] ? 'error' : 'success';
const helpText = (key, touched, errors) =>
  !touched[key] ? undefined : errors[key];

export  {
  validStatus,
  helpText
}
