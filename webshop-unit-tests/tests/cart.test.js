import { describe, it, expect, beforeEach } from 'vitest';
import { ShoppingCart, ShoppingCartItem, DiscountResult } from '../js/cart.js';
import { Product } from '../js/product.js';

describe('ShoppingCart', () => {
    /** @type {ShoppingCart} */
    let cart;

    /** @type {Product} */
    let product1;

    /** @type {Product} */
    let product2;

    beforeEach(() => {
        cart = new ShoppingCart();
        product1 = new Product(1, 'Laptop', 1000, '💻');
        product2 = new Product(2, 'Mouse', 50, '🖱️');
    });

    describe('1. addItem', () => {
        it('1.1. adds a new product with quantity 1', () => {
            cart.addItem(product1);

            expect(cart.getItems()).toHaveLength(1);
            expect(cart.getItems()[0]).toBeInstanceOf(ShoppingCartItem);
            expect(cart.getItems()[0].product).toBeInstanceOf(Product);
            expect(cart.getItems()[0].product).toBe(product1);
            expect(cart.getItems()[0].quantity).toBe(1);
        });

        it('1.2. increases quantity if the product already exists', () => {
            cart.addItem(product1);
            cart.addItem(product1);
            expect(cart.getItems()).toHaveLength(1);
            expect(cart.getItems()[0].quantity).toBe(2);
            expect(cart.getItems().length).toBe(1);
        });
        it('1.3. throws an error if null is passed as item', () => {
            expect(() => cart.addItem(null)).toThrow("Item must be an instance of Product.");
        });
    });

    describe('2. decreaseQuantity', () => {
        it('2.1. removes the product if the quantity reaches 0', () => {
            cart.addItem(product1);
            cart.decreaseQuantity(product1);
            expect(cart.getItems()).toHaveLength(0);
        });
        it('2.2. decreases the quantity of an existing product (quantity >1)', () => {

        });

        it('2.3. Does nothing if null is passed', () => {
            cart.decreaseQuantity(null);
            expect(cart.getItems()).toHaveLength(0);
        });
        it('2.4. When a product is passed that is not in de ShoppingCart', () => {
            cart.addItem(product1);
            expect(() => cart.decreaseQuantity(product2)).toThrow("This product is not in the ShoppingCart");
        });
    });


});
