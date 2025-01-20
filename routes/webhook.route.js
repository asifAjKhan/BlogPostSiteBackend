import express from "express";

import { clerkWebHook } from "../controllers/webhook.controller.js";
import bodyParser from "body-parser";

const webHookRouter = express.Router();

webHookRouter.post("/clerk",bodyParser.raw({type : 'application/json'}), clerkWebHook)

export default webHookRouter