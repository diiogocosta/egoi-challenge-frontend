export interface Category {
  id: number;
  name: string;
  categoryId: number;
  categories: Category[];
  created: number;
  modified: number;
}
