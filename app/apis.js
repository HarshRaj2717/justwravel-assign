"use server";

export async function fetchAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
}
