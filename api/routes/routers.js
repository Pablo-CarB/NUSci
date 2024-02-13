import express from "express";
import PageController from "../controller/page_controller.js";

const router = express.Router();

router.route("/").get(PageController.getHomePage);

router.route("/:pageName").get((req, res) => {
  PageController.getSimplePage(req, res, req.params.pageName);
});

export default router;