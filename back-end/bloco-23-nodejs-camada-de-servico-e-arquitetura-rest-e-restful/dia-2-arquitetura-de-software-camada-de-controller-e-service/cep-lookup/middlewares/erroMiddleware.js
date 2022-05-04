const erroMiddleware = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }
  if (err.status) {
    return res.status(err.status).json({ error: { message: err.message } });
  }
  return res.status(500).json({ error: { message: err.message } });
}

module.exports = erroMiddleware;