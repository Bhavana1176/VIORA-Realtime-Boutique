// import {useMemo,useState} from "react"; import {useSearchParams} from "react-router-dom"; import ProductCard from "../components/ProductCard"; import {products} from "../data/products";
// export default function Shop({onWish,onCart,wishlist}){
//  const [params]=useSearchParams(),[cat,setCat]=useState(params.get("category")||"All"),[search,setSearch]=useState(params.get("search")||""),[sort,setSort]=useState("featured");
//  const cats=["All","Sarees","Kurtis","Salwar Sets","Blouses","Jewellery","Kids Wear","Bridal"];
//  const list=useMemo(()=>{let x=products.filter(p=>(cat==="All"||p.category===cat)&&(p.name.toLowerCase().includes(search.toLowerCase())||p.collection.toLowerCase().includes(search.toLowerCase())));if(sort==="low")x.sort((a,b)=>a.price-b.price);if(sort==="high")x.sort((a,b)=>b.price-a.price);if(sort==="rating")x.sort((a,b)=>b.rating-a.rating);return x},[cat,search,sort]);
//  return <main className="section shop-page"><div className="shop-head"><div><p className="eyebrow">VIORA COLLECTIONS</p><h1>{cat==="All"?"Shop All":cat}</h1><p>{list.length} beautiful pieces ready to discover.</p></div><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="rating">Top Rated</option></select></div>
//  <div className="shop-tools"><div className="filters">{cats.map(c=><button className={cat===c?"selected":""} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div><input className="filter-search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search this collection..."/></div>
//  {list.length?<div className="product-grid">{list.map(p=><ProductCard key={p.id} p={p} wished={wishlist.some(x=>x.id===p.id)} onWish={onWish} onCart={onCart}/>)}</div>:<div className="empty"><h2>No products found</h2><p>Try another category or search term.</p></div>}</main>}











import {useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {SlidersHorizontal, Search} from "lucide-react";
import ProductCard from "../components/ProductCard";
import {products} from "../data/products";

export default function Shop({onWish, onCart, wishlist}) {
  const [params] = useSearchParams();

  const [cat, setCat] = useState(params.get("category") || "All");
  const [search, setSearch] = useState(params.get("search") || "");
  const [sort, setSort] = useState("featured");

  const cats = [
    "All",
    "Sarees",
    "Kurtis",
    "Salwar Sets",
    "Blouses",
    "Jewellery",
    "Kids Wear",
    "Bridal"
  ];

  const list = useMemo(() => {
    let x = products.filter(
      p =>
        (cat === "All" || p.category === cat) &&
        (
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.collection.toLowerCase().includes(search.toLowerCase())
        )
    );

    if (sort === "low") x.sort((a, b) => a.price - b.price);
    if (sort === "high") x.sort((a, b) => b.price - a.price);
    if (sort === "rating") x.sort((a, b) => b.rating - a.rating);

    return x;
  }, [cat, search, sort]);

  return (
    <main className="section shop-page">

      {/* HERO */}
      <section className="shop-hero">
        <div className="shop-hero-text">
          <p className="eyebrow">THE VIORA EDIT</p>

          <h1>
            Shop Our
            <br />
            <em>Collections</em>
          </h1>

          <p className="shop-intro">
            Discover thoughtfully selected styles made for
            celebrations, everyday elegance and unforgettable moments.
          </p>

          <div className="shop-count">
            <span>{list.length}</span> beautiful pieces
          </div>
        </div>

        <div className="shop-hero-card">
          <img
            src="/images/saree1.jpg"
            alt="VIORA Collection"
          />
          <div className="hero-card-text">
            <small>CURATED FOR YOU</small>
            <strong>Timeless fashion, beautifully chosen.</strong>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="collection-nav">

        <div className="collection-nav-title">
          <span>Explore</span>
          <strong>Collections</strong>
        </div>

        <div className="collection-pills">
          {cats.map(c => (
            <button
              key={c}
              className={cat === c ? "active" : ""}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

      </section>

      {/* TOOL BAR */}
      <section className="shop-toolbar">

        <div className="results-info">
          <SlidersHorizontal size={17} />
          <span>
            {cat === "All" ? "All Collections" : cat}
          </span>
          <small>{list.length} products</small>
        </div>

        <div className="shop-controls">

          <div className="collection-search">
            <Search size={17} />

            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
            />
          </div>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

        </div>

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
          <h2>No products found</h2>
          <p>Try another category or search term.</p>
        </div>
      )}

    </main>
  );
}