const addressController = require("./AddressController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", addressController.fetchSingleAddress);
router.put("/", addressController.updateAddress);
router.post("/", addressController.createAddress);
router.delete("/:id", addressController.deleteAddress);

module.exports = router;
