"use client";
import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "./apis";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productsSave, setProductsSave] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllProducts();
      if (data) {
        setProducts(data);
        setProductsSave(data);
        extractUniqueCategories(data);
      }
    }
    fetchData();
  }, [null]);

  // Function to extract unique categories from products
  const extractUniqueCategories = (products) => {
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setAllCategories(categories);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  // Sort products based on price
  useEffect(() => {
    if (sort === 0) {
      setProducts(productsSave);
      return;
    }
    const sortedProducts = [...products].sort((a, b) => {
      if (sort === 1) {
        return a.price - b.price;
      } else if (sort === -1) {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  }, [sort]);

  return (
    <main>
      <Navbar
        setSearchQuery={setSearchQuery}
        sort={sort}
        setSort={setSort}
        allCategories={allCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="hero min-h-screen bg-base-200 py-5">
        {/* Display the filtered products using Card component */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Card {...product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
