const ERROR_HANDLERS = {
  CorsError: (res) => {
    res.status(401).json({ error: 'Unathorized' });
  },
  SyntaxError: (res) => {
    res.status(400).json({ error: 'Invalid or unexpected token, write another URL' });
  },
  defaultError: (res) => {
    res.status(500).end();
  },
};

module.exports = (err, req, res, next) => {
  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError;
  handler(res);
};
