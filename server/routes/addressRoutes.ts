import express from "express";
import { getAddresses, deleteAddress, addAddress, updateAddress } from "../controllers/addressController.js";
import { protect } from "../middleware/auth.js"

const AddressRouter = express.Router()

AddressRouter.get("/", protect, getAddresses);
AddressRouter.post("/", protect, addAddress);
AddressRouter.put("/:id", protect, updateAddress);
AddressRouter.delete("/:id", protect, deleteAddress);

export default AddressRouter;
