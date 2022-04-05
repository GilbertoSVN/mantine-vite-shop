import { useQuery } from "react-query";
import { localApi } from "../services";
import { Product } from "../types/Product";
import { REFETCH_TIME } from "./constants";

interface ProductsProps {
  page?: number;
  pageCount?: number;
}

export async function getProducts({
  page = 1,
  pageCount = 10,
}: ProductsProps): Promise<Product[]> {
  const { data } = await localApi.get<Product[]>("/products", {
    params: { page, per_page: pageCount },
  });

  return data;
}

function useProducts(
  props: ProductsProps,
) {
  return useQuery(["products", props.page], () => getProducts(props), { refetchInterval: REFETCH_TIME });
}

export default useProducts;
