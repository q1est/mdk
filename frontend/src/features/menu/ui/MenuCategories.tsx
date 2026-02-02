interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

export const MenuCategories = ({ categories, onSelect }: Props) => (
  <nav>
    {categories.map(c => (
      <button key={c} onClick={() => onSelect(c)}>
        {c}
      </button>
    ))}
  </nav>
);
