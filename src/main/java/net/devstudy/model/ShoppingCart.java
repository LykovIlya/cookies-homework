package net.devstudy.model;

import java.util.ArrayList;

public class ShoppingCart {
    ArrayList<ShoppingCartItem> shoppingCart;

    void addProduct(int idProduct, int count) {
        shoppingCart.add(new ShoppingCartItem(idProduct, count));
    }

    void removeProduct(int idProduct, int count) {
        shoppingCart.remove(shoppingCart.get(count));
    }

    ArrayList<ShoppingCartItem> getItems() {
        return shoppingCart;
    }

    int getTotalCount() {
        return shoppingCart.size();
    }

    @Override
    public String toString() {
        return "ShoppingCart [shoppingCart=" + shoppingCart + "]";
    }

}
