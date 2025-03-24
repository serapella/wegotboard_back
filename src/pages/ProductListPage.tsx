import { Filter } from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import SortBy from "../components/SortBy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setProducts, setTotalPages } from "../store/paginationSlice";
import { useGetProductsQuery } from "../store/productAPI";
import { ProductQuery } from "../types";
import styles from "../css_modules/ProductListPage.module.css";
import { useState } from "react";

interface PlayerCount {
  min: number;
  max: number;
}

let player_count_translation: { [key: string]: PlayerCount } = {
  players_1: { min: 1, max: 999 },
  players_2: { min: 2, max: 2 },
  "players_3-5": { min: 3, max: 5 },
  "players_6+": { min: 2, max: 6 },
  "players_10+": { min: 4, max: 999 },
};

const getPlayerCountMin = (playerCount: object) => {
  let playercount_min = 999;

  for (const [key, value] of Object.entries(playerCount)) {
    if (value) {
      if (player_count_translation[key].min < playercount_min) {
        playercount_min = player_count_translation[key].min;
      }
    }
  }

  return playercount_min > 0 && playercount_min < 999
    ? playercount_min
    : undefined;
};

const getPlayerCountMax = (playerCount: object) => {
  let playercount_max = -1;

  for (const [key, value] of Object.entries(playerCount)) {
    if (value) {
      if (player_count_translation[key].max > playercount_max) {
        playercount_max = player_count_translation[key].max;
      }
    }
  }

  return playercount_max > 0 && playercount_max < 999
    ? playercount_max
    : undefined;
};

const getAgeMin = (age: string) => {
  switch (age) {
    case "All Ages":
      return 0;
    case "6+":
      return 6;
    case "8+":
      return 8;
    case "10+":
      return 10;
    case "12+":
      return 12;
    case "14+":
      return 14;
    case "16+":
      return 16;
    case "18+":
      return 18;
    default:
      return 0;
  }
};

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, products } = useSelector(
    (state: RootState) => state.productGrid
  );
  const { selectedSort } = useSelector((state: RootState) => state.sort);

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const { categories, priceRange, playerCount, duration, difficulty, age } =
    useSelector((state: RootState) => state.filter || {});

  const filters: ProductQuery = {
    categories: Object.keys(categories).filter(
      (category) => categories[category]
    ),
    priceMax: priceRange.max,
    playerMin: getPlayerCountMin(playerCount),
    playerMax: getPlayerCountMax(playerCount),
    duration: Object.keys(duration).find((time) => duration[time]) || "",
    difficulty:
      Object.keys(difficulty).find((level) => difficulty[level]) || "",
    ageMin: getAgeMin(age),
    ageMax: undefined,
  };
  const { data: fetchedProducts } = useGetProductsQuery(filters);

  useEffect(() => {
    if (fetchedProducts) {
      dispatch(setProducts(fetchedProducts));
      dispatch(
        setTotalPages(Math.ceil(fetchedProducts.length / productsPerPage))
      );
    }
  }, [fetchedProducts, productsPerPage]);

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(products.length / productsPerPage)));
  }, [productsPerPage]);

  useEffect(() => {
    if (selectedSort === "ascending") {
      dispatch(setProducts([...products].sort((a, b) => a.price - b.price)));
    } else if (selectedSort === "descending") {
      dispatch(setProducts([...products].sort((a, b) => b.price - a.price)));
    } else if (selectedSort === "rating") {
      dispatch(
        setProducts(
          [...products].sort((a, b) => {
            const avgA =
              a.userRating.reduce((a, b) => a + b, 0) / a.userRating.length;
            const avgB =
              b.userRating.reduce((a, b) => a + b, 0) / b.userRating.length;
            return avgB - avgA;
          })
        )
      );
    }
  }, [selectedSort]);

  return (
    <div>
      <div className={styles.container}>
        <Filter />
        <div className={styles.right}>
          <SortBy setViewMode={setViewMode} viewMode={viewMode} />
          <ProductGrid
            products={products.slice(startIndex, endIndex)}
            viewMode={viewMode}
          />
        </div>
      </div>
      <Pagination />
    </div>
  );
};
export default ProductListPage;
