package net.devstudy.model;

public class Product {
    private String name;
    private int quantity;

    @Override
    public String toString() {
        return "Product [name=" + name + ", quantity=" + quantity + "]";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

}
