// import {useState} from "react";
// import {Link,useNavigate} from "react-router-dom";
// import {Search,UserRound,Heart,ShoppingBag,Menu,X} from "lucide-react";
// export default function Navbar({cartCount,wishlistCount}){
//  const [open,setOpen]=useState(false),[q,setQ]=useState(""),nav=useNavigate();
//  const go=e=>{e.preventDefault();if(q.trim())nav("/shop?search="+encodeURIComponent(q.trim()));};
//  const links=[["Home","/"],["Shop","/shop"],["Sarees","/collection/Sarees"],["Kurtis","/collection/Kurtis"],["Salwar Sets","/collection/Salwar%20Sets"],["Blouses","/collection/Blouses"],["Jewellery","/collection/Jewellery"],["About","/about"],["Contact","/contact"]];
//  return <><div className="announcement">✨ Free Shipping on Orders Above ₹999 <span>|</span> Easy 7-Day Returns</div>
//  <header className="navbar"><Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">❧</span><span><b>VIORA</b><small>Elegance Woven Into Every Moment</small></span></Link>
//  <button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
//  <nav className={"nav-links "+(open?"open":"")}>{links.map(([n,u])=><Link key={n} to={u} onClick={()=>setOpen(false)}>{n}</Link>)}</nav>
//  <div className="nav-actions"><form className="search-box" onSubmit={go}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search sarees, kurtis..."/><button><Search size={16}/></button></form>
//  <Link to="/login"><UserRound size={19}/></Link><Link to="/wishlist" className="icon-wrap"><Heart size={20}/>{wishlistCount>0&&<i>{wishlistCount}</i>}</Link><Link to="/cart" className="icon-wrap"><ShoppingBag size={20}/>{cartCount>0&&<i>{cartCount}</i>}</Link></div></header></>;
// }










import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";

export default function Navbar({cartCount, wishlistCount}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();

  const go = e => {
    e.preventDefault();

    if (q.trim()) {
      nav("/shop?search=" + encodeURIComponent(q.trim()));
    }
  };

  const links = [
    ["Home", "/"],
    ["Shop", "/shop"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ];

  return (
    <>
      <div className="announcement">
        ✨ Free Shipping on Orders Above ₹999
        <span>|</span>
        Easy 7-Day Returns
      </div>

      <header className="navbar">

        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">❧</span>

          <span>
            <b>VIORA</b>
            <small>Elegance Woven Into Every Moment</small>
          </span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X/> : <Menu/>}
        </button>

        <nav className={"nav-links " + (open ? "open" : "")}>
          {links.map(([n, u]) => (
            <Link
              key={n}
              to={u}
              onClick={() => setOpen(false)}
            >
              {n}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">

          <form
            className="search-box"
            onSubmit={go}
          >
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search sarees, kurtis..."
            />

            <button type="submit">
              <Search size={16}/>
            </button>
          </form>

          <Link to="/login">
            <UserRound size={19}/>
          </Link>

          <Link
            to="/wishlist"
            className="icon-wrap"
          >
            <Heart size={20}/>
            {wishlistCount > 0 && (
              <i>{wishlistCount}</i>
            )}
          </Link>

          <Link
            to="/cart"
            className="icon-wrap"
          >
            <ShoppingBag size={20}/>
            {cartCount > 0 && (
              <i>{cartCount}</i>
            )}
          </Link>

        </div>

      </header>
    </>
  );
}