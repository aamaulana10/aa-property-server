import express from "express"
import { createProperty, 
        deleteProperty, 
        getProperties } from "../controller/propertyController"

const router = express.Router()

router.get("/", getProperties)
router.post("/", createProperty)
router.delete("/:id", deleteProperty)

export default router
