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
            ? "bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-800 px-3.5 py-2 text-xs"
            : "glass-card text-zinc-400 hover:text-white hover:bg-zinc-800/80 px-4 py-2 text-xs sm:text-sm";

        const activeStyle =
          variant === "solid"
            ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 px-3.5 py-2 text-xs font-semibold"
            : "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105 px-4 py-2 text-xs sm:text-sm font-semibold";

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
