const customerLogin = (req, res) => {
  res.json({ message: "Customer Login" });
};
const customerRegister = (req, res) => {
  res.json({ message: "Customer Register" });
};
const chefLogin = (req, res) => {
  res.json({ message: "Chef Login" });
};
const chefRegister = (req, res) => {
  res.json({ message: "Chef Register" });
};

export { customerLogin, customerRegister, chefLogin, chefRegister };
