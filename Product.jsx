// import {useState} from "react"; import {useNavigate,useParams,Link} from "react-router-dom"; import {Heart,ShoppingBag,Minus,Plus,ArrowLeft,Check} from "lucide-react"; import {products} from "../data/products";
// export default function Product({onWish,wishlist,onCart}){const {id}=useParams(),p=products.find(x=>x.id===Number(id)),[size,setSize]=useState(p?.sizes?.[0]),[qty,setQty]=useState(1),nav=useNavigate();if(!p)return <div className="empty"><h2>Product not found</h2><Link to="/shop" className="btn">BACK TO SHOP</Link></div>;
//  const add=()=>{onCart(p,qty);alert(`${p.name} added to cart`)};const order=()=>{onCart(p,qty);nav("/checkout")};
//  return <main className="section product-page"><Link to="/shop" className="back"><ArrowLeft size={15}/> Back to shopping</Link><div className="product-detail"><div className="detail-image"><img src={p.image}/>{p.stock<7&&<span className="stock">Only {p.stock} left</span>}</div><div className="detail-copy"><p className="eyebrow">{p.category} / {p.collection}</p><h1>{p.name}</h1><div className="rating big">★★★★★ <span>{p.rating} / 5</span></div><div className="detail-price">₹{p.price.toLocaleString()} <del>₹{p.oldPrice.toLocaleString()}</del><em>{Math.round((1-p.price/p.oldPrice)*100)}% OFF</em></div><p className="desc">A thoughtfully selected VIORA piece designed to bring comfort, colour and effortless Indian elegance to your wardrobe. Product availability is updated in your local cart.</p>
//  <div className="sizes"><b>Select Size</b><div>{p.sizes.map(s=><button className={size===s?"chosen":""} onClick={()=>setSize(s)} key={s}>{s}</button>)}</div></div>
//  <div className="quantity"><b>Quantity</b><div><button onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={15}/></button><span>{qty}</span><button onClick={()=>setQty(qty+1)}><Plus size={15}/></button></div></div>
//  <div className="detail-actions"><button className="btn cart-btn" onClick={add}><ShoppingBag size={17}/> ADD TO CART</button><button className="btn order-btn" onClick={order}>ORDER NOW</button><button className={"detail-wish "+(wishlist.some(x=>x.id===p.id)?"active":"")} onClick={()=>onWish(p)}><Heart size={20} fill={wishlist.some(x=>x.id===p.id)?"currentColor":"none"}/></button></div>
//  <div className="trust"><div><Check/> In stock & ready to ship</div><div><Check/> Easy 7-day returns</div><div><Check/> Secure checkout</div></div></div></div></main>}











import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  ArrowLeft,
  Check
} from "lucide-react";

import { products } from "../data/products";

export default function Product({ onWish, wishlist, onCart }) {
  const { id } = useParams();

  const p = products.find((x) => x.id === Number(id));

  const [size, setSize] = useState(p?.sizes?.[0]);
  const [qty, setQty] = useState(1);

  const nav = useNavigate();

  // If product does not exist
  if (!p) {
    return (
      <div className="empty">
        <h2>Product not found</h2>

        <Link to="/shop" className="btn">
          BACK TO SHOP
        </Link>
      </div>
    );
  }

  // Add product to cart
  const add = () => {
    onCart(p, qty);
    alert(`${p.name} added to cart`);
  };

  // Order Now
  const order = () => {
    onCart(p, qty);
    nav("/checkout");
  };

  // Wishlist status
  const isWished = wishlist.some((x) => x.id === p.id);

  // Discount
  const discount = Math.round(
    (1 - p.price / p.oldPrice) * 100
  );

  return (
    <main className="section product-page">

      {/* BACK TO SHOP */}
      <Link to="/shop" className="back">
        <ArrowLeft size={15} />
        Back to shopping
      </Link>


      <div className="product-detail">

        {/* ================= PRODUCT IMAGE ================= */}

        <div className="detail-image">

          <img
            src={p.src}
            alt={p.name}
          />

          {p.stock < 7 && (
            <span className="stock">
              Only {p.stock} left
            </span>
          )}

        </div>


        {/* ================= PRODUCT DETAILS ================= */}

        <div className="detail-copy">

          <p className="eyebrow">
            {p.category} / {p.collection}
          </p>


          <h1>
            {p.name}
          </h1>


          {/* RATING */}

          <div className="rating big">
            ★★★★★
            <span>
              {p.rating} / 5
            </span>
          </div>


          {/* PRICE */}

          <div className="detail-price">

            ₹{p.price.toLocaleString()}

            <del>
              ₹{p.oldPrice.toLocaleString()}
            </del>

            <em>
              {discount}% OFF
            </em>

          </div>


          {/* DESCRIPTION */}

          <p className="desc">
            A thoughtfully selected VIORA piece designed
            to bring comfort, colour and effortless Indian
            elegance to your wardrobe. Product availability
            is updated in your local cart.
          </p>


          {/* ================= SIZE ================= */}

          <div className="sizes">

            <b>
              Select Size
            </b>

            <div>

              {p.sizes.map((s) => (

                <button
                  key={s}
                  className={size === s ? "chosen" : ""}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>

              ))}

            </div>

          </div>


          {/* ================= QUANTITY ================= */}

          <div className="quantity">

            <b>
              Quantity
            </b>

            <div>

              <button
                onClick={() =>
                  setQty(Math.max(1, qty - 1))
                }
              >
                <Minus size={15} />
              </button>

              <span>
                {qty}
              </span>

              <button
                onClick={() =>
                  setQty(qty + 1)
                }
              >
                <Plus size={15} />
              </button>

            </div>

          </div>


          {/* ================= ACTION BUTTONS ================= */}

          <div className="detail-actions">

            <button
              className="btn cart-btn"
              onClick={add}
            >
              <ShoppingBag size={17} />
              ADD TO CART
            </button>


            <button
              className="btn order-btn"
              onClick={order}
            >
              ORDER NOW
            </button>


            <button
              className={
                "detail-wish " +
                (isWished ? "active" : "")
              }
              onClick={() => onWish(p)}
              title="Wishlist"
            >

              <Heart
                size={20}
                fill={
                  isWished
                    ? "currentColor"
                    : "none"
                }
              />

            </button>

          </div>


          {/* ================= TRUST INFORMATION ================= */}

          <div className="trust">

            <div>
              <Check />
              In stock & ready to ship
            </div>

            <div>
              <Check />
              Easy 7-day returns
            </div>

            <div>
              <Check />
              Secure checkout
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}