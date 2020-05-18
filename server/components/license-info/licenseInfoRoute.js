const licenseInfoController = require("./LicenseInfoController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", licenseInfoController.fetchLicenseInfos);
router.put("/", licenseInfoController.updateLicenseInfo);
router.post("/", licenseInfoController.createLicenseInfo);
router.delete("/:id", licenseInfoController.deleteLicenseInfo);

module.exports = router;
