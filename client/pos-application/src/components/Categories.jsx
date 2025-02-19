import { useEffect, useState } from "react";
import { getCategories } from "../services/CategoryService.js";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      const categories = data;
      setCategories(categories);
    });
  }, []);

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
    <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
      <span>Tümü</span>
    </li>
    {
      categories.map((category) => (
        <li key={category._id} className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
          <span>{category.title}</span>
        </li>
      ))
    }

  </ul>
  )
}

export default Categories
