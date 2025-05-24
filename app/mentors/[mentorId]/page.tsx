import Details from "@/components/Details"

const MentorsDetail = async ({
  params,
}: {
  params: Promise<{ mentorId: string }>
}) => {
	const { mentorId } = await params

	return (
		<Details mentorId={mentorId} />
	)
}

export default MentorsDetail
