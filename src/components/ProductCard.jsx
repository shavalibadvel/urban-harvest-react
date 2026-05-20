import { useDispatch } from "react-redux";
import { deleteProduct, toggleStatus } from "../redux/productsSlice";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-emoji">{product.emoji}</div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>

        <div className="product-details">
          <span className="product-price">₹{product.price}</span>
          <span className="product-stock">Stock: {product.stock}</span>
        </div>
        <span
          className={
            "product-status " +
            (product.status === "Available" ? "status-available" : "status-out")
          }
        >
          {product.status}
        </span>

        <div className="product-actions">
          <button
            className="btn-toggle"
            onClick={() => dispatch(toggleStatus(product.id))}
          >
            Toggle Status
          </button>
          <button
            className="btn-delete"
            onClick={() => dispatch(deleteProduct(product.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
