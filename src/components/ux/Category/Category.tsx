import { ICategory } from 'interface/category.interface';

import css from './Category.module.css';

interface IProps {
  categories: ICategory[];
  currentCategory: number;
  setCurrentCategory: (prev: number) => void;
  animationKey: number;
}

const Category: React.FC<IProps> = ({
  currentCategory,
  setCurrentCategory,
  categories,
  animationKey,
}) => {
  return (
    <div className={css.category__container} key={animationKey}>
      {categories.map((category: ICategory) => (
        <div
          onClick={() => setCurrentCategory(category.id)}
          className={`max-w-[150px] w-full min-h-[150px]  rounded-md 
                border-2 border-gray-600 text-black text-lg
                flex justify-center items-center flex-col
                hover:scale-105 transition-all cursor-pointer
                
                ${currentCategory == category.id && 'bg-red-400 text-white border-none'}
                `}
          key={category.id}
        >
          {category.icon}
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
