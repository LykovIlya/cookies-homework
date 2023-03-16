package net.devstudy.model;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;

public class JsonTest {
    public static void main(String[] args) throws IOException {
        String jsonString = new String(
                Files.readAllBytes(Paths.get("src/test/resourses/shoppingcart.json")));
        System.out.println(jsonString);
        String jsonResp = new String(Files.readAllBytes(Paths.get("src/test/resourses/products.json")));
        System.out.println(jsonResp);

        Gson g = new Gson();
        ShoppingCart shoppingCart = g.fromJson(jsonString, ShoppingCart.class);

        ArrayList<ShoppingCartItem> shoppingCartItems = shoppingCart.getItems();

        System.out.println(shoppingCartItems.toArray()[0]);
    }
}
