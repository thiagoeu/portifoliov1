const CategoryFilterBar = ({
  categories = [],
  activeCategory,
  onSelectCategory,
  variant = "glass",
  className = "",
}) => {
  return (
    <div
      role="group"
      aria-label="Filtros de categoria"
      className={`flex flex-wrap items-center gap-2 ${className}`}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const inactiveStyle =
          variant === "solid"
            ? "bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 px-3.5 py-2 text-xs"
            : "glass-card text-slate-400 hover:text-white hover:bg-slate-800/80 px-4 py-2 text-xs sm:text-sm";

        const activeStyle =
          variant === "solid"
            ? "bg-gradient-to-r from-sky-500 to-emerald-600 text-white shadow-md shadow-sky-500/20 px-3.5 py-2 text-xs"
            : "bg-gradient-to-r from-sky-500 to-emerald-600 text-white shadow-lg shadow-sky-500/20 scale-105 px-4 py-2 text-xs sm:text-sm";

        return (
          <button
            key={cat}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelectCategory(cat)}
            className={`rounded-xl font-medium transition-all duration-300 ${
              isActive ? activeStyle : inactiveStyle
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilterBar;
