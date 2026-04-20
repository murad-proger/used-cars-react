import React from "react";
import axios from "axios";

import type { ProductProps } from "../@types/productPropsType";
import { Link } from "react-router";

export const SearchForm = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState<ProductProps[]>([]);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    if(!isMounted) {
      axios
        .get("https://41576e2fc60efbdd.mokky.dev/items")
        .then(res => setItems(res.data))
        .catch(err => console.error(err));
      }
      setIsMounted(true)
  }, [isMounted]);

  const filteredItems = items.filter(item =>
    item.brand.toLowerCase().includes(searchValue.toLowerCase())
  );

  const uniqueItems = Array.from(
    new Map(
      filteredItems.map(item => [item.brand, item])
    ).values()
  );
  

  return (
    <form className="vin_search" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        name="search"
        value={searchValue}
        placeholder="Поиск..."
        onChange={e => setSearchValue(e.target.value)}
      />
      <button>
        <img src="img/icons/search.png" alt="" />
      </button>
      {searchValue && (
        <ul className="searchList">
          {uniqueItems.map(item => (
            <li key={item.productId}>
              <Link to={`/catalog?brand=${item.brand}`} onClick={()=>setSearchValue('')}>{item.brand}</Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
