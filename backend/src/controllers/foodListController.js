//@desc Read all food Items in food list
//@route GET /api/food-list
//@access public

const getAllFoodItems = (req, res) => {
  res.json({ message: "Get all the list of food Items" });
};

//@desc Read single food Item
//@route GET /api/food-list/:id
//@access public
const getFoodItem = (req, res) => {
  res.json({ message: `Get food item ${req.params.id}` });
};

//@desc Create new food Item
//@route POST /api/food-list
//@access public
const createFoodItem = (req, res) => {
  res.json({ message: "Created new food item" });
};

//@desc Update food Item
//@route POST /api/food-list/:id
//@access public
const updateFoodItem = (req, res) => {
  res.json({ message: `Updated food item ${req.params.id}` });
};

//@desc Update food Item
//@route POST /api/food-list/:id
//@access public
const deleteFoodItem = (req, res) => {
  res.json({ message: `Deleted food item ${req.params.id}` });
};

export { getAllFoodItems, createFoodItem, getFoodItem, updateFoodItem, deleteFoodItem };
