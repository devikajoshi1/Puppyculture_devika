import React from "react";
import './cartpage.css';
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
        <cart-items class="page-width is-empty">
            <div class="cart__warnings">
                <h1 class="cart__empty-text">Your cart is empty</h1>
                <a className="button">
                    <Link to="/ShopOurProducts!">Continue shopping</Link>
                </a>
                <h2 class="cart__login-title">Have an account?</h2>
                <p class="cart__login-paragraph">
                <a> <Link to = "/" className="ll">Log in</Link></a> to check
                out faster.
                </p>
            </div>
        </cart-items>
    )
}


export default CartPage;