
type CategoryFiltersProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
            activeCategory === category
              ? "bg-[#A498DF] text-white dark:bg-[#9D8FE0] dark:text-[#171624]"
              : "bg-[#F0ECFA] text-[#766A98] hover:bg-[#E7E0F7] dark:bg-[#29263B] dark:text-[#C4BBDD] dark:hover:bg-[#39354F]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
