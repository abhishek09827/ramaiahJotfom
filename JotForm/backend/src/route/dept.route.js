import { Router } from "express";
import {  addEntry, deleteEntry, fetchDept, getTables} from "../controllers/dept.controllers.js";

import { upload } from "../middlewares/multer.js";
const deptRouter = Router();

deptRouter.route("/fetchDept").get(
  fetchDept
);
deptRouter.route("/getTables/:id").get(
    getTables
  );
  deptRouter.route("/addEntry").post(
    upload.fields([
        {
          name: "Document",
          maxCount: 1,
        },
      ]),
    addEntry
  );
deptRouter.route("/deleteEntry").post(
    deleteEntry
  );
export { deptRouter };
