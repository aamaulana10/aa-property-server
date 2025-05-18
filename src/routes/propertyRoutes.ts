import express from "express"
import { createProperty, 
        deleteProperty, 
        getProperties, 
        updateProperty} from "../controller/propertyController"

const router = express.Router()

router.get("/", getProperties)
router.post("/", createProperty)
router.put("/:id", updateProperty)
router.delete("/:id", deleteProperty)

export default router
