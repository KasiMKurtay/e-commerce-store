import express from "express";
import {
  addToCart,
  deleteFromCart,
  getCartProducts,
  updateQuantity,
} from "../controllers/cartController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protectedRoute, getCartProducts);
router.post("/", protectedRoute, addToCart);
router.delete("/", protectedRoute, deleteFromCart);
router.put("/:id", protectedRoute, updateQuantity);

export default router;
