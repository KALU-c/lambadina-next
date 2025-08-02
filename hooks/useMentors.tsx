import { getMentors } from "@/actions/mentors"
import { useQuery } from "@tanstack/react-query"

const useMentors = () => {
	return useQuery({
		queryKey: ["mentors"],
		queryFn: getMentors,
	})
}

export default useMentors