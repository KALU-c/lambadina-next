import { getCategories } from "@/actions/category"
import { useQuery } from "@tanstack/react-query"

const useCategories = () => {
	return useQuery({
		queryKey: ["categories"],
		queryFn: getCategories
	})
}

export default useCategories