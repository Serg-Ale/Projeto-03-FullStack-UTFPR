export function joiValidation(joiObject) {
  return (req, res, next) => {
    const { error } = joiObject.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    next();
  };
}
