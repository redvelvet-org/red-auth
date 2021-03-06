const Joi = require('joi');

const validId = Joi.string().guid().description('User ID');
const validEmail = Joi.string().email().description('Email');
const validFirstName = Joi.string().alphanum().min(3).max(30);
const validLastName = Joi.string().alphanum().min(3).max(30);
const validPassword = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);
const validToken = Joi.string().min(10);

const login = {
  description: 'Login API',
  notes: 'User login action',
  tags: ['api'],
  validate: {
    payload: {
      email: validEmail.required(),
      password: validPassword.required()
    }
  },
  auth: false
};

const logout = {
  description: 'Logout API',
  notes: 'User logout action',
  tags: ['api'],
  validate: {
    params: {
      id: validId.required()
    }
  },
  auth: 'jwt'
};

const resetPassword = {
  description: 'Reset password',
  notes: 'Reset user password',
  tags: ['api'],
  validate: {
    query: {
      resetToken: validToken.required()
    },
    payload: {
      password: validPassword.required()
    }
  },
  auth: false
};

const forgotPassword = {
  description: 'Get Reset password link',
  notes: 'Get reset password link',
  tags: ['api'],
  validate: {
    payload: {
      email: validEmail.required()
    }
  },
  auth: false
};

const signup = {
  description: 'Sign-up',
  notes: 'New user Signup',
  tags: ['api'],
  validate: {
    payload: {
      email: validEmail.required(),
      password: validPassword.required(),
      firstName: validFirstName.required(),
      lastName: validLastName.required()
    }
  },
  auth: false
};

const profile = {
  description: 'Profile',
  notes: 'Get my profile',
  tags: ['api'],
  validate: {
    params: {
      id: validId.required()
    }
  },
  auth: 'jwt'
};

module.exports = {
  login,
  logout,
  resetPassword,
  forgotPassword,
  signup,
  profile
};
