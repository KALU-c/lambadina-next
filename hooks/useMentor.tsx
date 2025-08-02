import { getMentor } from "@/actions/mentors"
import { useQuery } from "@tanstack/react-query"

const useMentor = (id: string) => {
	return useQuery({
		queryKey: ["mentor", id],
		queryFn: () => getMentor(id),
		enabled: !!id
	})
}

export default useMentor