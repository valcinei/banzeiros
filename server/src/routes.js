const express = require("express");
const router = new express.Router();


const BoatController = require("./controllers/BoatController");
router.get("/boats", BoatController.index);
router.get("/boats/:id", BoatController.find);
router.post("/boats", BoatController.store);
router.put("/boats/:id", BoatController.update);
router.delete("/boats/:id", BoatController.destroy);

const CityController = require("./controllers/CityController");
router.get("/cities", CityController.index);
router.get("/cities/:id", CityController.find);
router.post("/cities", CityController.store);
router.put("/cities/:id", CityController.update);
router.delete("/cities/:id", CityController.destroy);

const StateController = require("./controllers/StateController");
router.get("/states", StateController.index);
router.get("/states/:id", StateController.find);
router.post("/states", StateController.store);
router.put("/states/:id", StateController.update);
router.delete("/states/:id", StateController.destroy);


const HaborController = require("./controllers/HaborController");
const Haborvalidator = require("./validators/Haborvalidator");
router.get("/habors", HaborController.index);
router.get("/habors/:id", HaborController.find);

router.post("/habors",
    Haborvalidator.create(),
    HaborController.store);

router.put("/habors/:id",
    Haborvalidator.update(),
    HaborController.update);

router.delete("/habors/:id", HaborController.destroy);


const VoyageController = require("./controllers/VoyageController");
const Voyagevalidator = require("./validators/Voyagevalidator");
router.get("/voyages", VoyageController.index);
router.get("/voyages/:id", VoyageController.find);

router.post("/voyages",
    Voyagevalidator.create(),
    VoyageController.store);

router.put("/voyages/:id",
    Voyagevalidator.update(),
    VoyageController.update);

router.delete("/voyages/:id", VoyageController.destroy);

module.exports = router;
