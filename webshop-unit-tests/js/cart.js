// cart.js
import { Product } from './product.js';

export class ShoppingCartItem {
    /**
     * @param {Product} product 
     * @param {number} quantity 
     */
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }
}

export class DiscountResult {
    /**
     * @param {boolean} success 
     * @param {string} message 
     */
    constructor(success, message) {
        this.success = success;
        this.message = message;
    }
}

export class ShoppingCart {
    constructor() {
        /** @type {Array<ShoppingCartItem>} */ this.items = [];

        this.discountStatus = {
            active: false,
            code: '',
            percentage: 0
        };
    }

    /**
     * Adds the given product to the shopping cart.
     * @param {Product} product 
     */
    addItem(product) {
        if (!(product instanceof Product)) {
            throw new Error("Item must be an instance of Product.");
        }
        this.items.push(new ShoppingCartItem(product, 1));
    }

    /**
     * Removes the given product from the shopping cart.
     * @param {Product} product
     */
    removeItem(product) {
        this.items = this.items.filter(item => item.product.id !== product.id);
    }

    /**
     * Increases the quantity of the given product in the shopping cart.
     * @param {Product} product 
     */
    increaseQuantity(product) {
        const item = this.items.find(item => item.product.id === product.id);
        if (item) {
            item.quantity += 1;
        }
    }

    /**
     * Decreases the quantity of the given product in the shopping cart.
     * @param {Product} product 
     */
    decreaseQuantity(product) {
        const item = this.items.find(item => item.product.id === product.id);
        if (item) {
            item.quantity -= 1;
        }
    }

    /**
     * Applies a discount code to the shopping cart.
     * @param {string} code - The discount code to apply.
     * @returns {DiscountResult} - An instance containing the result of the operation.
     */
    applyDiscountCode(code) {

    }

    removeDiscountCode() {
        this.discountStatus = { active: false, code: '', percentage: 0 };
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    getDiscountAmount() {
        if (!this.discountStatus.active) return 0;
        return (this.getSubtotal() * this.discountStatus.percentage) / 100;
    }

    getTotal() {
        return this.getSubtotal() - this.getDiscountAmount();
    }

    getItems() {
        return this.items;
    }
}
