import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import qs from "qs"

import {Aside, Breadcrumbs, Filters, GridView, ProductCard, Sort, Title,} from "../components";
import { useAppDispatch } from "../redux/store";
import type { RootState } from "../redux/store";
import { fetchCatalog, setGridView } from "../redux/slices/catalog/slice";
import { brandsFilterstState, setPriceMin, setPriceMax, setYearMin, setYearMax, setDisplacementMin, setDisplacementMax, filterBrands, filterBodyType, bodyTypesFilterState } from "../redux/slices/filters/slice";

const Catalog = () => {
  const dispatch = useAppDispatch()
  const {items, gridView} = useSelector((state:RootState) => state.catalog)
  const {brands, price, year, displacement, bodyTypes} = useSelector((state:RootState) => state.filters)
  const navigate = useNavigate()
  const isMounted = React.useRef(false);
  
  const selectedBrandsFromUrl = React.useRef<string[]>([]);
  const selectedBodyTypesFromUrl = React.useRef<string[]>([]);
  const {sort} = useSelector((state: RootState) => state.catalog)

  const sortedItems = [...items]
  if(sort === "popularity-asc") {
    sortedItems.sort((a,b)=>a.raiting - b.raiting)
  }
  if(sort === "brand-asc") {
    sortedItems.sort((a,b)=>a.brand.localeCompare(b.brand))
  }
  if(sort === "price-asc") {
    sortedItems.sort((a,b)=>a.price - b.price)
  }
  if(sort === "popularity-desc") {
    sortedItems.sort((a,b)=>b.raiting - a.raiting)
  }
  if(sort === "brand-desc") {
    sortedItems.sort((a,b)=>b.brand.localeCompare(a.brand))
  }
  if(sort === "price-desc") {
    sortedItems.sort((a,b)=>b.price - a.price)
  }

  React.useEffect(()=> {
    if(items.length > 0) {
      dispatch(brandsFilterstState(items))
      dispatch(bodyTypesFilterState(items));
    }
  }, [items, dispatch])
  
  const onGridViewClick = () => {
    dispatch(setGridView(gridView === 'row' ? 'column': 'row'))
  }

  React.useEffect(()=>{
    const parsedString = qs.parse(window.location.search, { ignoreQueryPrefix: true })

    const price = (parsedString.price ?? {}) as {min?: string, max?: string}
    const year = (parsedString.year ?? {}) as {min?: string, max?: string}
    const displacement = (parsedString.displacement ?? {}) as {min?: string, max?: string}
    
    const brandsArr: string[] = Array.isArray(parsedString.brand)
      ? parsedString.brand.filter((b): b is string => typeof b === 'string')
      : typeof parsedString.brand === 'string' ? [parsedString.brand] : []
    selectedBrandsFromUrl.current = brandsArr;
    
    const bodyTypeArr: string[] = Array.isArray(parsedString.bodyType)
      ? parsedString.bodyType.filter((b): b is string => typeof b === 'string')
      : typeof parsedString.bodyType === 'string'
        ? [parsedString.bodyType]
        : [];
    selectedBodyTypesFromUrl.current = bodyTypeArr;

    dispatch(setPriceMin(price.min ? Number(price.min) : null))
    dispatch(setPriceMax(price.max ? Number(price.max) : null))
    dispatch(setYearMin(year.min ? Number(year.min) : null))
    dispatch(setYearMax(year.max ? Number(year.max) : null))
    dispatch(setDisplacementMin(displacement.min ? Number(displacement.min) : null))
    dispatch(setDisplacementMax(displacement.max ? Number(displacement.max) : null))

    brandsArr.forEach(brand => dispatch(filterBrands(brand)))
    bodyTypeArr.forEach(bodyType => dispatch(filterBodyType(bodyType)))
    
  }, [dispatch])

  React.useEffect(() => {
    if (brands.length === 0) return;

    selectedBrandsFromUrl.current.forEach(name => dispatch(filterBrands(name)));
    selectedBrandsFromUrl.current = [];
  }, [brands, dispatch]);

  React.useEffect(() => {
    if (bodyTypes.length === 0) return;

    selectedBodyTypesFromUrl.current.forEach(bt => dispatch(filterBodyType(bt)));
    selectedBodyTypesFromUrl.current = [];
  }, [bodyTypes, dispatch]);
  
  React.useEffect(()=>{
    if(!isMounted.current) {
      isMounted.current = true
      return
    }

    const brand = brands.filter(brand => brand.isSelected).map(brand => brand.name)
    const bodyType = bodyTypes.filter(bt => bt.isSelected).map(bt => bt.name);
    const filters = { price, year, displacement, brand, bodyType }
    const query = qs.stringify(filters)

    navigate(`?${query}`)
    dispatch(fetchCatalog(filters))
    
  }, [brands, price, year, displacement, bodyTypes, navigate, dispatch])


  return (
    <>
      <Breadcrumbs />
      <main className="catalog_page">
        <div className="container">
          <Aside>
            <Filters />
          </Aside>
          <div className="content">
            <div className="products">
              <div className="top">
                <Title page={true}>Каталог автомобилей</Title>
                <div className="sorting">
                  <div className="by">
                    <label>
                      Сортировать по
                      <Sort />
                    </label>
                  </div>
                  <GridView onClick={onGridViewClick} gridView={gridView} />
                </div>
              </div>
              <div className="filters_btn">
                <button type="button">Фильтр</button>
              </div>
              <div className={`cards ${gridView}`}>
                {
                sortedItems.map(item => {
                  return <ProductCard
                    productId={item.productId}
                    brand={item.brand}
                    model={item.model}
                    year={item.year}
                    mileage={item.mileage}
                    displacement={item.displacement}
                    price={item.price}
                    images={item.images}
                    key={item.productId}
                  />
                })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Catalog;