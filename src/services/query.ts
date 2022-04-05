import { QueryClient } from "react-query";
import { REFETCH_TIME } from "../hooks/constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: REFETCH_TIME
    },
  },
});

export default queryClient;
