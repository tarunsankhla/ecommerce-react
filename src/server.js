import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getAllProductsHandler,
  getProductHandler,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import {
	getAddressListHandler,
	addAddressHandler,
	removeAddressHandler,
	updateAddressHandler,
} from "./backend/controllers/AddressController";
import { getOrderItemsHandler } from "./backend/controllers/OrdersController";
import { addItemToOrdersHandler } from "./backend/controllers/OrdersController";
import { categories } from "./backend/db/categories";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";
import { v4 as uuid } from "uuid";

export function makeServer({ environment = "development" } = {}) {
  const Razorpay = require("razorpay");
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
      addressList: Model,
			orders: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          cart: [],
          wishlist: [],
					addressList: [
						{
							_id: uuid(),
							name: "Tarun Sankhla",
							street: "Princenton Street",
							city: "New york",
							state: "New York",
							country: "USA",
							pincode: "100043",
							phone: "123456789",
						},
					],
					orders: []
        })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // products routes (public)
      this.get("/products", getAllProductsHandler.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:productId",
        removeItemFromCartHandler.bind(this)
      );

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:productId",
        removeItemFromWishlistHandler.bind(this)
      );


      // addresse routes (private)
			this.get("/user/address", getAddressListHandler.bind(this));
			this.post("/user/address", addAddressHandler.bind(this));
			this.post("/user/address/:addressId", updateAddressHandler.bind(this));
			this.delete("/user/address/:addressId", removeAddressHandler.bind(this));

			// order routes (private)
			this.get("/user/orders", getOrderItemsHandler.bind(this));
			this.post("/user/orders", addItemToOrdersHandler.bind(this));

			// orders
			this.post("/orders", async (req, res) => {
				try {
					const instance = new Razorpay({
						key_id: process.env.REACT_APP_RAZORPAY_ID,
						key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
					});
					console.log("instance", instance.orders);

					const options = {
						amount: 100, // amount in smallest currency unit
						currency: "INR",
					};

					const order = instance.orders.create(options);

					if (!order) return res.status(500).send("Some error occured");
					console.log("order", order);
					res.json(order);
				} catch (error) {
					console.log(error);
				}
			});
    },
  });
}
