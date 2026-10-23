import {useEffect,useState} from "react"; import {Routes,Route} from "react-router-dom"; import Navbar from "./components/Navbar"; import Footer from "./components/Footer"; import Home from "./pages/Home"; import Shop from "./pages/Shop"; import Collection from "./pages/Collection"; import Product from "./pages/Product"; import Cart from "./pages/Cart"; import Wishlist from "./pages/Wishlist"; import Checkout from "./pages/Checkout"; import {About,Contact,Login} from "./pages/Info";
export default function App(){
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem("viora-cart")||"[]")), [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem("viora-wishlist")||"[]"));
 useEffect(()=>localStorage.setItem("viora-cart",JSON.stringify(cart)),[cart]);useEffect(()=>localStorage.setItem("viora-wishlist",JSON.stringify(wishlist)),[wishlist]);
 const onCart=(p,qty=1)=>setCart(c=>{const f=c.find(x=>x.id===p.id);return f?c.map(x=>x.id===p.id?{...x,qty:x.qty+qty}:x):[...c,{...p,qty}]});
 const onWish=p=>setWishlist(w=>w.some(x=>x.id===p.id)?w.filter(x=>x.id!==p.id):[...w,p]);
 const props={onWish,onCart,wishlist};
 return <><Navbar cartCount={cart.reduce((s,x)=>s+x.qty,0)} wishlistCount={wishlist.length}/><Routes>
 <Route path="/" element={<Home {...props}/>}/><Route path="/shop" element={<Shop {...props}/>}/><Route path="/collection/:name" element={<Collection {...props}/>}/><Route path="/product/:id" element={<Product {...props}/>}/><Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/><Route path="/wishlist" element={<Wishlist wishlist={wishlist} onWish={onWish} onCart={onCart}/>}/><Route path="/checkout" element={<Checkout cart={cart} setCart={setCart}/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/login" element={<Login/>}/>
 </Routes><Footer/></>}
