import React from 'react'
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../redux/store";
import type { RootState } from "../../redux/store";
import { filterBrands, setPriceMin, setPriceMax, setYearMin, setYearMax, setDisplacementMin, setDisplacementMax, filterBodyType } from "../../redux/slices/filters/slice";
import { CustomInput } from "../CustomInput";

export const Filters = () => {
  const {brands, price, year, displacement, bodyTypes} = useSelector((state:RootState) => state.filters)
  const dispatch = useAppDispatch()

  const toggleBrand = (brendName: string) => {
    dispatch(filterBrands(brendName))
  }

  const toggleBodyType = (bodyTypeName: string) => {
    dispatch(filterBodyType(bodyTypeName))
  }

  const debouncedSetPriceMin = debounce((value: number | null) => {
    dispatch(setPriceMin(value));
  }, 500);
  const debouncedSetPriceMax = debounce((value: number | null) => {
    dispatch(setPriceMax(value));
  }, 500);
  const debouncedSetYearMin = debounce((value: number | null) => {
    dispatch(setYearMin(value));
  }, 500);
  const debouncedSetYearMax = debounce((value: number | null) => {
    dispatch(setYearMax(value));
  }, 500);
  const debouncedSetDisplacementMin = debounce((value: number | null) => {
    dispatch(setDisplacementMin(value));
  }, 500);
  const debouncedSetDisplacementMax = debounce((value: number | null) => {
    dispatch(setDisplacementMax(value));
  }, 500);

  const resetFilters = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {  // Проблема
    e.preventDefault();

    dispatch(setPriceMin(null));
    dispatch(setPriceMax(null));
    dispatch(setYearMin(null));
    dispatch(setYearMax(null));
    dispatch(setDisplacementMin(null));
    dispatch(setDisplacementMax(null));

    brands.forEach(brand => {
      if (brand.isSelected) dispatch(filterBrands(brand.name));
    });
    
    bodyTypes.forEach(bt => {
      if (bt.isSelected) dispatch(filterBodyType(bt.name));
    });
  };

  return (
    <div className="filters">
      <div className="close">
        <span>Закрыть</span>
      </div>
      <b className="title">Фильтр</b>
      <div className="content">
        <div className="filter price">
          <h3 className="title">
            Цена
            <i></i>
          </h3>
          <div className="inner from_to">
            <div>
              <NumericFormat
                value={price.min}
                thousandSeparator="."
                decimalSeparator=","
                allowNegative={false}
                placeholder="min"
                customInput={CustomInput}
                onValueChange={(values) => {
                  debouncedSetPriceMin(values.floatValue ?? null);
                }}
              />
            </div>
            <span className="line"></span>
            <div>
              <NumericFormat
                value={price.max}
                thousandSeparator="."
                decimalSeparator=","
                allowNegative={false}
                placeholder="max"
                customInput={CustomInput}
                onValueChange={(values) => {
                  debouncedSetPriceMax(values.floatValue ?? null);
                }}
              />
            </div>
          </div>
        </div>
        <div className="filter brands">
          <h3 className="title">
            Бренд
            <i></i>
          </h3>
          <div className="inner">
            {
              brands.map((brand)=>{
                return (
                  <label key={brand.name}>
                    <input onChange={()=>toggleBrand(brand.name)} type="checkbox" checked={brand.isSelected} />
                    <span className="fake_checkbox">
                      <span></span>
                    </span>
                    <h4>{brand.name}</h4>
                  </label>
                )
              })
            }
          </div>
        </div>
        <div className="filter year">
          <h3 className="title">
            Год выпуска
            <i></i>
          </h3>
          <div className="inner from_to">
            <div>
              <NumericFormat
                value={year.min}
                allowNegative={false}
                decimalScale={0}
                placeholder="от (1900)"
                customInput={CustomInput}
                onValueChange={(values) => {
                  debouncedSetYearMin(values.floatValue ?? null);
                }}
              />
            </div>
            <span className="line"></span>
            <div>
              <NumericFormat
                value={year.max}
                allowNegative={false}
                decimalScale={0}
                placeholder="до (2024)"
                customInput={CustomInput}
                onValueChange={(values) => {
                  debouncedSetYearMax(values.floatValue ?? null);
                }}
              />
            </div>
          </div>
        </div>
        <div className="filter displacement">
          <h3 className="title">
            Объём двигателя
            <i></i>
          </h3>
          <div className="inner from_to">
            <div>
              <NumericFormat
                value={displacement.min}
                allowNegative={false}
                decimalScale={1}
                decimalSeparator="."
                placeholder="от (0.8)"
                customInput={CustomInput}
                onValueChange={(values) => {
                  debouncedSetDisplacementMin(values.floatValue ?? null);
                }}
              />
            </div>
            <span className="line"></span>
            <div>
              <NumericFormat
                value={displacement.max}
                allowNegative={false}
                decimalScale={1}
                decimalSeparator="."
                placeholder="до (6)"
                customInput={CustomInput}
                onValueChange={(values) => {
                  debouncedSetDisplacementMax(values.floatValue ?? null);
                }}
              />
            </div>
          </div>
        </div>
        <div className="filter bodyType">
          <h3 className="title">Тип кузова</h3>
          <div className="inner">
            {bodyTypes.map(bt => (
              <label key={bt.name}>
                <input
                  type="checkbox"
                  checked={bt.isSelected}
                  onChange={() => toggleBodyType(bt.name)}
                />
                <span className="fake_checkbox"><span></span></span>
                <h4>{bt.name}</h4>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        {/* <input type="submit" value="Подобрать" /> */}
        <input type="reset" onClick={(e)=>{resetFilters(e)}} value="Сбросить" />
      </div>
    </div>
  );
};
