import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const breadcrumbNameMap: Record<string, string> = {
  catalog: "Каталог",
  cart: "Корзина",
  favorites: "Избранное",
  orders: "Мои заказы",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const { productId } = useParams<{ productId: string }>();

  const {items} = useSelector((state: RootState) => state.catalog);

  if (location.pathname.startsWith("/product/")) {
    const product = items.find(item => String(item.productId) === productId);
    

    return (
      <section className="breadcrumbs_section">
        <div className="container">
          <div className="breadcrumbs">
            <nav>
              <ul>
                <li className="breadcrumb">
                  <Link to="/">Главная</Link>
                </li>
                <li className="breadcrumb">
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li className="breadcrumb active">
                  <span>{product ? `${product.brand} ${product.model}` : "Товар"}</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <section className="breadcrumbs_section">
      <div className="container">
        <div className="breadcrumbs">
          <nav>
            <ul>
              <li className="breadcrumb">
                <Link to="/">Главная</Link>
              </li>

              {pathnames.map((segment, index) => {
                const path = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;

                const name =
                  breadcrumbNameMap[segment] ??
                  decodeURIComponent(segment);

                return (
                  <li
                    key={path}
                    className={`breadcrumb ${isLast ? "active" : ""}`}
                  >
                    {isLast ? (
                      <span>{name}</span>
                    ) : (
                      <Link to={path}>{name}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
