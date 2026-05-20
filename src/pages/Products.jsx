import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

function Products() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    emoji: "📦",
  });

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || product.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Handle add product form submit
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      alert("Please fill in all required fields");
      return;
    }
    const productToAdd = {
      id: Date.now(), 
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock) || 0,
      status: Number(newProduct.stock) > 0 ? "Available" : "Out of Stock",
      emoji: newProduct.emoji || "📦",
    };

    dispatch(addProduct(productToAdd));
    setNewProduct({ name: "", category: "", price: "", stock: "", emoji: "📦" });
    setShowModal(false);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Product Management</h1>
          <p>Manage your products easily.</p>
        </div>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Product
        </button>
      </div>
      <div className="products-filters">
        <input
          type="text"
          placeholder="🔍 Search products..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Available">Available</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      <p className="products-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>😕 No products found. Try changing your search or filter.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="modal-form">
              <div className="form-group">
                <label>Product Name *</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  placeholder="e.g. Organic Apples"
                />
              </div>

              <div className="form-group">
                <label>Category *</label>
                <input
                  type="text"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  placeholder="e.g. Fruits"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price (₹) *</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    placeholder="0"
                  />
                </div>

                <div className="form-group">
                  <label>Stock</label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, stock: e.target.value })
                    }
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Emoji (optional)</label>
                <input
                  type="text"
                  value={newProduct.emoji}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, emoji: e.target.value })
                  }
                  placeholder="🍎"
                  maxLength={2}
                />
              </div>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
