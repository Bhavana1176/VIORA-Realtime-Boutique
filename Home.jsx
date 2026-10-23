// import {Link} from "react-router-dom"; import {ArrowRight,Truck,RotateCcw,ShieldCheck,Award} from "lucide-react"; import {products,categoryMeta} from "../data/products"; import ProductCard from "../components/ProductCard";
// export default function Home({onWish,onCart,wishlist}){
//  return <main><section className="hero"><div className="hero-copy"><p className="eyebrow">VIORA BOUTIQUE</p><h1>Elegance Woven Into<br/>Every Moment</h1><p>Discover timeless Indian fashion, thoughtfully curated for celebrations, everyday beauty and unforgettable moments.</p><Link to="/shop" className="btn">SHOP ALL COLLECTIONS <ArrowRight size={16}/></Link></div><div className="hero-image"/></section>
//  <section className="section"><div className="section-title"><span/> <h2>Shop By Category</h2> <span/></div><div className="category-row">{categoryMeta.map(c=><Link className="category-card" to={"/collection/"+encodeURIComponent(c.name)} key={c.name}><img src={c.image}/><b>{c.name}</b><small>{c.sub}</small></Link>)}</div></section>
//  <section className="section"><div className="heading-line"><div><p className="eyebrow">JUST LANDED</p><h2>New Arrivals</h2></div><Link to="/shop">View All <ArrowRight size={15}/></Link></div><div className="product-grid">{products.slice(0,8).map(p=><ProductCard key={p.id} p={p} wished={wishlist.some(x=>x.id===p.id)} onWish={onWish} onCart={onCart}/>)}</div></section>
//  <section className="collection-split"><div><p className="eyebrow">THE FESTIVE EDIT</p><h2>Make every celebration<br/>a VIORA moment.</h2><p>Silks, zari, festive colours and statement details — selected for weddings, festivals and special evenings.</p><Link to="/collection/Festive%20Sarees" className="btn light">EXPLORE FESTIVE <ArrowRight size={16}/></Link></div><div/></section>
//  <section className="benefits"><div><Truck/><b>Free Shipping</b><small>Orders above ₹999</small></div><div><RotateCcw/><b>Easy Returns</b><small>7-day returns</small></div><div><ShieldCheck/><b>Secure Checkout</b><small>Safe payments</small></div><div><Award/><b>Premium Quality</b><small>Curated with love</small></div></section>
//  <section className="section story"><div><p className="eyebrow">THE VIORA PROMISE</p><h2>Indian elegance, made effortless.</h2><p>From everyday kurtis to bridal sarees, VIORA brings together graceful silhouettes, rich details and versatile pieces for every wardrobe.</p><Link to="/about" className="text-link">Discover our story →</Link></div><div className="story-card"><b>New customer?</b><span>Get a special welcome offer on your first order.</span><Link to="/shop" className="btn">SHOP NOW</Link></div></section></main>}






import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Award
} from "lucide-react";

import { products, categoryMeta } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ onWish, onCart, wishlist }) {

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-copy">
          <p className="eyebrow">VIORA BOUTIQUE</p>

          <h1>
            Elegance Woven Into
            <br />
            Every Moment
          </h1>

          <p>
            Discover timeless Indian fashion, thoughtfully curated
            for celebrations, everyday beauty and unforgettable moments.
          </p>

          <Link to="/shop" className="btn">
            SHOP ALL COLLECTIONS
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* HERO IMAGE */}
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGhBG4jaxH-XuO1bpqTJd-b9_kQUZaLA6fbSQvJ5hi_g_cG9Tf0aC7d6B&s=10')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="section">

        <div className="section-title">
          <span />
          <h2>Shop By Category</h2>
          <span />
        </div>

        <div className="category-row">

          {categoryMeta.map((c) => (

            <Link
              className="category-card"
              to={"/collection/" + encodeURIComponent(c.name)}
              key={c.name}
            >

              {/* IMPORTANT: c.src */}
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
              />

              <b>{c.name}</b>

              <small>{c.sub}</small>

            </Link>

          ))}

        </div>

      </section>


   {/* ================= NEW ARRIVALS ================= */}
<section className="section">

  <div className="heading-line">

    <div>
      <p className="eyebrow">JUST LANDED</p>
      <h2>New Arrivals</h2>
      <p className="section-subtitle">
        Fresh styles, new colours and elegant looks curated for you.
      </p>
    </div>

    <Link to="/shop">
      View All
      <ArrowRight size={15} />
    </Link>

  </div>

  <div className="product-grid">

    {[
      products[8],   // Kurti
      products[10],  // Salwar
      products[15],  // Blouse
      products[20],  // Kids Wear
      products[23],  // Bridal
      products[2],   // Saree
      products[12],  // Salwar
      products[7]    // Kurti
    ].map((p) => (

      <ProductCard
        key={p.id}
        p={p}
        wished={wishlist.some((x) => x.id === p.id)}
        onWish={onWish}
        onCart={onCart}
      />

    ))}

  </div>

</section>

      {/* ================= FESTIVE EDIT ================= */}
      <section className="collection-split">

        <div>

          <p className="eyebrow">THE FESTIVE EDIT</p>

          <h2>
            Make every celebration
            <br />
            a VIORA moment.
          </h2>

          <p>
            Silks, zari, festive colours and statement details —
            selected for weddings, festivals and special evenings.
          </p>

          <Link
            to="/collection/Festive%20Sarees"
            className="btn light"
          >
            EXPLORE FESTIVE
            <ArrowRight size={16} />
          </Link>

        </div>

        <div />

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="benefits">

        <div>
          <Truck />
          <b>Free Shipping</b>
          <small>Orders above ₹999</small>
        </div>

        <div>
          <RotateCcw />
          <b>Easy Returns</b>
          <small>7-day returns</small>
        </div>

        <div>
          <ShieldCheck />
          <b>Secure Checkout</b>
          <small>Safe payments</small>
        </div>

        <div>
          <Award />
          <b>Premium Quality</b>
          <small>Curated with love</small>
        </div>

      </section>


      {/* ================= STORY ================= */}
      <section className="section story">

        <div>

          <p className="eyebrow">THE VIORA PROMISE</p>

          <h2>
            Indian elegance, made effortless.
          </h2>

          <p>
            From everyday kurtis to bridal sarees, VIORA brings
            together graceful silhouettes, rich details and
            versatile pieces for every wardrobe.
          </p>

          <Link to="/about" className="text-link">
            Discover our story →
          </Link>

        </div>


        <div className="story-card">

          <b>New customer?</b>

          <span>
            Get a special welcome offer on your first order.
          </span>

          <Link to="/shop" className="btn">
            SHOP NOW
          </Link>

        </div>

      </section>

    </main>
  );
}


































































































// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Truck,
//   RotateCcw,
//   ShieldCheck,
//   Award,
// } from "lucide-react";
// import { products, categoryMeta } from "../data/products";
// import ProductCard from "../components/ProductCard";

// export default function Home({ onWish, onCart, wishlist }) {
//   return (
//     <main>
//       {/* HERO SECTION */}
//       <section className="hero">
//         <div className="hero-copy">
//           <p className="eyebrow">VIORA BOUTIQUE</p>

//           <h1>
//             Elegance Woven Into
//             <br />
//             Every Moment
//           </h1>

//           <p>
//             Discover timeless Indian fashion, thoughtfully curated for
//             celebrations, everyday beauty and unforgettable moments.
//           </p>

//           <Link to="/shop" className="btn">
//             SHOP ALL COLLECTIONS
//             <ArrowRight size={16} />
//           </Link>
//         </div>

//         {/* YOUR IMAGE */}
//         <div className="hero-image">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGhBG4jaxH-XuO1bpqTJd-b9_kQUZaLA6fbSQvJ5hi_g_cG9Tf0aC7d6B&s=10"
//             alt="VIORA Boutique Collection"
//           />
//         </div>
//       </section>

//       {/* SHOP BY CATEGORY */}
//       <section className="section">
//         <div className="section-title">
//           <span />
//           <h2>Shop By Category</h2>
//           <span />
//         </div>

//         <div className="category-row">
//           {categoryMeta.map((c) => (
//             <Link
//               className="category-card"
//               to={"/collection/" + encodeURIComponent(c.name)}
//               key={c.name}
//             >
//               <img src={c.image} alt={c.name} />
//               <b>{c.name}</b>
//               <small>{c.sub}</small>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* NEW ARRIVALS */}
//       <section className="section">
//         <div className="heading-line">
//           <div>
//             <p className="eyebrow">JUST LANDED</p>
//             <h2>New Arrivals</h2>
//           </div>

//           <Link to="/shop">
//             View All <ArrowRight size={15} />
//           </Link>
//         </div>

//         <div className="product-grid">
//           {products.slice(0, 8).map((p) => (
//             <ProductCard
//               key={p.id}
//               p={p}
//               wished={wishlist.some((x) => x.id === p.id)}
//               onWish={onWish}
//               onCart={onCart}
//             />
//           ))}
//         </div>
//       </section>

//       {/* FESTIVE EDIT */}
//       <section className="collection-split">
//         <div>
//           <p className="eyebrow">THE FESTIVE EDIT</p>

//           <h2>
//             Make every celebration
//             <br />
//             a VIORA moment.
//           </h2>

//           <p>
//             Silks, zari, festive colours and statement details — selected for
//             weddings, festivals and special evenings.
//           </p>

//           <Link
//             to="/collection/Festive%20Sarees"
//             className="btn light"
//           >
//             EXPLORE FESTIVE
//             <ArrowRight size={16} />
//           </Link>
//         </div>

//         <div />
//       </section>

//       {/* BENEFITS */}
//       <section className="benefits">
//         <div>
//           <Truck />
//           <b>Free Shipping</b>
//           <small>Orders above ₹999</small>
//         </div>

//         <div>
//           <RotateCcw />
//           <b>Easy Returns</b>
//           <small>7-day returns</small>
//         </div>

//         <div>
//           <ShieldCheck />
//           <b>Secure Checkout</b>
//           <small>Safe payments</small>
//         </div>

//         <div>
//           <Award />
//           <b>Premium Quality</b>
//           <small>Curated with love</small>
//         </div>
//       </section>

//       {/* VIORA STORY */}
//       <section className="section story">
//         <div>
//           <p className="eyebrow">THE VIORA PROMISE</p>

//           <h2>Indian elegance, made effortless.</h2>

//           <p>
//             From everyday kurtis to bridal sarees, VIORA brings together
//             graceful silhouettes, rich details and versatile pieces for every
//             wardrobe.
//           </p>

//           <Link to="/about" className="text-link">
//             Discover our story →
//           </Link>
//         </div>

//         <div className="story-card">
//           <b>New customer?</b>

//           <span>
//             Get a special welcome offer on your first order.
//           </span>

//           <Link to="/shop" className="btn">
//             SHOP NOW
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }