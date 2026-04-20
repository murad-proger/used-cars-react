import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import { useAppDispatch } from "../redux/store";
import { setSort } from "../redux/slices/catalog/slice";

export const Sort = () => {
  const {sort} = useSelector((state: RootState) => state.catalog)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const str = e.target.value
    dispatch(setSort(str))
  };

  return (
    <select name="sorting_by" value={sort} onChange={handleChange}>
      <option value="popularity-asc">Популярности (по возрастанию)</option>
      <option value="popularity-desc">Популярности (по убыванию)</option>
      <option value="brand-asc">названию бренда (по возрастанию)</option>
      <option value="brand-desc">названию бренда (по убыванию)</option>
      <option value="price-asc">цене (по возрастанию)</option>
      <option value="price-desc">цене (по убыванию)</option>
    </select>
  );
};
