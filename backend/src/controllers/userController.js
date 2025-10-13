import { Customer } from "../models/customerModel.js";

const getUser = (req, res) => {
  const { id } = req.params;

  const user = Customer.findById(id);

  res.status(200).json(user);
};
const updateUser = () => {};
const deleteUser = () => {};

export { getUser, deleteUser, updateUser };
