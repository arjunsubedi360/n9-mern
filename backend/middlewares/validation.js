export const validate  = (schema) => {
    return (req, res, next) => {
      const { value, error } = schema.validate(req.body);
      if (error) next(error);
      req.body = value;
      next();
    };
  };
  