const Joi = require("joi");

export const VERIFY_POST = Joi.object({
  title: Joi.string().max(128).required(),
  date_application: Joi.string(),
  link: Joi.string().max(128).required(),
  company: Joi.string().max(128).required(),
  salary_from: Joi.number().integer(),
  salary_to: Joi.number().integer(),
  interest: Joi.number().integer(),
  currency: Joi.string().max(128),
  remote: Joi.boolean(),
  status: Joi.string(),
  notes: Joi.string().max(128),
  user_id: Joi.number().integer(),
});

export const VERIFY_SCHEMA = Joi.object({
  title: Joi.string().max(128),
  link: Joi.string().max(128),
  date_application: Joi.string(),
  company: Joi.string().max(128),
  salary_from: Joi.number().integer(),
  salary_to: Joi.number().integer(),
  interest: Joi.number().integer(),
  currency: Joi.string().max(128),
  notes: Joi.string().max(128),
  remote: Joi.boolean(),
  status: Joi.string(),
  user_id: Joi.number().integer(),
  vacant_id: Joi.number().integer(),
});
