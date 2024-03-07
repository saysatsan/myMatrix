const rulesText = {
  required: 'This field is required',
  minLength: (min) => `This field should be at least ${min} characters long`,
  maxLength: (max) => `This field should be at most ${max} characters long`,
};

const orderRules = {
  name: {
    required: { value: true, message: rulesText.required },
    minLength: {
      value: 2,
      message: rulesText.minLength(2),
    },
    maxLength: {
      value: 30,
      message: rulesText.maxLength(30),
    },
  },
  lastname: {
    required: 'Lastname is required',
    minLength: {
      value: 2,
      message: rulesText.minLength(2),
    },
    maxLength: {
      value: 30,
      message: rulesText.maxLength(30),
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[0-9]{10}$/,
      message: 'Invalid phone number',
    },
  },
  birthday: {
    required: 'Birthday is required',
    pattern: {
      value: /^\d{2}-\d{2}-\d{4}$/,
      message: 'Invalid date format. Try MM-DD-YYYY',
    },
  },
};

export default orderRules;
