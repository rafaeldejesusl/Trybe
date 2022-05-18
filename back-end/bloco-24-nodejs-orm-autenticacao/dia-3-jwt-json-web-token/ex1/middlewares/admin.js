const admin = (req, res, next) => {
  const { user } = req;
  if (!user) return res.status(401).json({ message: 'This endpoint requires authentication' });
  if (!user.admin) return res.status(403).json({ message: 'Restricted acess' });
  return next();
}

module.exports = admin;