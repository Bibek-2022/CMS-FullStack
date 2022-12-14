import Joi from "joi";

export const adminRegistrationValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    fName: Joi.string().min(3).max(50).required(),
    lName: Joi.string().min(3).max(50).required(),
    dob: Joi.date().allow(null, "").required(),
    phone: Joi.string().min(3).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).max(30).required(),
    password: Joi.string().min(3).max(50).required(),
    Address: Joi.string().allow("").max(50),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};

export const loginValidation = (req, res, next) => {
  console.log(req.body);

  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).max(30).required(),
    password: Joi.string().min(3).max(50).required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }

  next();
};

// category Validation
export const categoryValidation = (req, res, next) => {
  const schema = Joi.object({
    status: Joi.string().min(3).max(50).required(),
    name: Joi.string().min(3).max(50).required(),
    parentCatId: Joi.string().allow(null, ""),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
  next();
};
