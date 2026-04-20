import type { GridViewType } from "../@types/gridViewType";

interface GridViewComponentType {
  gridView: GridViewType;
  onClick: () => void;
}

export const GridView = ({gridView, onClick }: GridViewComponentType) => {
  const grid = () => {
    if (gridView === "row") {
      return (
        <div onClick={onClick} className="view_variant">
          <div className="line">
            <img src="img/icons/line.png" alt="" />
          </div>
          <div className="grid active">
            <img src="img/icons/grid.png" alt="" />
          </div>
        </div>
      );
    } else {
      return (
        <div onClick={onClick} className="view_variant">
          <div className="line active">
            <img src="img/icons/line.png" alt="" />
          </div>
          <div className="grid">
            <img src="img/icons/grid.png" alt="" />
          </div>
        </div>
      );
    }
  };
  return grid();
};
