
import TaskFilters from "@/components/TaskFilters";
import TaskSearch from "@/components/TaskSearch";
import CategoryFilters from "@/components/CategoryFilters";

type TaskToolbarProps = {
  activeFilter: string;
  onFilterChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
};

export default function TaskToolbar({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange,
}: TaskToolbarProps) {
  return (
    <>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TaskFilters
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
        />

        <TaskSearch
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>

      <CategoryFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </>
  );
}
