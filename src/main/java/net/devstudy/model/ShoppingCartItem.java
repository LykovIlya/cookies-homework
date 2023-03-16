package net.devstudy.model;

public class ShoppingCartItem {
    int id;
    int count;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public ShoppingCartItem(int id, int count) {
        this.id = id;
        this.count = count;
    }

    @Override
    public String toString() {
        return "ShoppingCartItem [id=" + id + ", count=" + count + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + count;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        ShoppingCartItem other = (ShoppingCartItem) obj;
        if (id != other.id)
            return false;
        if (count != other.count)
            return false;
        return true;
    }

}
