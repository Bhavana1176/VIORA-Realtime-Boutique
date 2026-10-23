import {Link} from "react-router-dom";
import {Heart, ShoppingBag} from "lucide-react";

export default function ProductCard({p, wished, onWish, onCart}) {
  return (
    <article className="product-card">

      <div className="product-image">
        <Link to={"/product/" + p.id}>
          <img src={p.src} alt={p.name} />
        </Link>

        <button
          className={"wish " + (wished ? "active" : "")}
          onClick={() => onWish(p)}
          title="Wishlist"
        >
          <Heart
            size={18}
            fill={wished ? "currentColor" : "none"}
          />
        </button>

        {p.oldPrice > p.price && (
          <span className="sale">SALE</span>
        )}

        <button
          className="quick-cart"
          onClick={() => onCart(p)}
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>

      <div className="product-info">
        <p className="category">
          {p.category} • {p.collection}
        </p>

        <Link to={"/product/" + p.id}>
          <h3>{p.name}</h3>
        </Link>

        <div className="rating">
          ★★★★★ <span>{p.rating}</span>
        </div>

        <strong>
          ₹{p.price.toLocaleString()}
        </strong>{" "}

        <del>
          ₹{p.oldPrice.toLocaleString()}
        </del>
      </div>

    </article>
  );
}