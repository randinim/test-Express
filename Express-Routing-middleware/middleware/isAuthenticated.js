//Momic Auth

const isAuthenticated = (req, res, next) => {
  const isLogin = fales;
  if (isLogin) {
    next();
  } else {
    res.json({
      message: "Unauthorized",
    });
  }
};
module.exports = isAuthenticated;
