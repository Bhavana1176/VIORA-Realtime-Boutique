// 








import {useParams, Link} from "react-router-dom";
import {products} from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Collection({onWish, onCart, wishlist}) {

  const {name} = useParams();

  const title = decodeURIComponent(name);

  const list = products.filter(
    p =>
      p.category.toLowerCase() === title.toLowerCase() ||
      p.collection.toLowerCase() === title.toLowerCase()
  );

  const heroImage = list.length > 0 ? list[0].src : "";

  return (
    <main className="section collection-page">

      {/* COLLECTION HERO */}
      <section className="collection-hero">

        <div className="collection-hero-content">

          <p className="eyebrow">
            VIORA COLLECTION
          </p>

          <h1>
            {title}
          </h1>

          <p className="collection-description">
            Discover our carefully curated {title.toLowerCase()}
            collection, created to bring effortless elegance
            to every occasion.
          </p>

          <div className="collection-count">
            <strong>{list.length}</strong>
            <span>styles curated for you</span>
          </div>

        </div>

        {heroImage && (
          <div className="collection-hero-image">

            <img
              src={heroImage}
              alt={title}
            />

            <div className="collection-image-label">
              <span>VIORA</span>
              <small>Elegance in every detail</small>
            </div>

          </div>
        )}

      </section>


      {/* COLLECTION BAR */}
      <section className="collection-bar">

        <div>
          <span className="collection-product-count">
            {list.length} Products
          </span>

          <span className="collection-subtitle">
            / {title}
          </span>
        </div>

        <Link to="/shop">
          View All Collections →
        </Link>

      </section>


      {/* PRODUCTS */}
      {list.length ? (

        <div className="product-grid">

          {list.map(p => (
            <ProductCard
              key={p.id}
              p={p}
              wished={wishlist.some(x => x.id === p.id)}
              onWish={onWish}
              onCart={onCart}
            />
          ))}

        </div>

      ) : (

        <div className="empty">

          <h2>Collection coming soon</h2>

          <p>
            More beautiful pieces are being added to VIORA.
          </p>

        </div>

      )}

    </main>
  );
}