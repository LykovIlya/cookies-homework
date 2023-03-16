package net.devstudy.model;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/ajax-products-servlet")
public class ProductsServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String jsonResp = new String(Files.readAllBytes(Paths.get(
                "C:\\Users\\Brux\\Desktop\\JavaStarter\\JavaEE_test\\shoppingcart-homework\\src\\test\\resourses\\products.json")));
        // String jsonResp = new String(Files.readAllBytes(Paths.get(
        // "src\\test\\resourses\\products.json")));
        PrintWriter out = resp.getWriter();
        out.println(jsonResp);
    }

}
