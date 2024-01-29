//Momic Auth

const isAuthenticated = (req, res, nest) => {
  const isLogin = true;
  if (isLogin) {
    next();
  } else {
    res.json({
      message: "Unauthorized",
    });
  }
};
module.exports = isAuthenticated;
