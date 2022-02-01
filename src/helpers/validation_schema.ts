const Joi = require('joi');

const verify_post = Joi.object({
    title: Joi.string().max(128).required(),
    date_application: Joi.string(),
    link: Joi.string().max(128).required(),
    company: Joi.string().max(128).required(),
    salary_from: Joi.number().integer(),
    salary_to: Joi.number().integer(),
    interest: Joi.number().integer(),
    currency: Joi.string().max(128),
    notes: Joi.string().max(128),
    user_id: Joi.number().integer(),
});

const verify_schema = Joi.object({
    title: Joi.string().max(128),
    link: Joi.string().max(128),
    company: Joi.string().max(128),
    salary_from: Joi.number().integer(),
    salary_to: Joi.number().integer(),
    interest: Joi.number().integer(),
    currency: Joi.string().max(128),
    notes: Joi.string().max(128),
    user_id: Joi.number().integer(),
    vacant_id: Joi.number().integer(),
});

module.exports ={
    verify_post,
    verify_schema,
}