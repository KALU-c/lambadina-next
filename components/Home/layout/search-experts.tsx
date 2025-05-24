import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

type SearchExpertsProps = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchExperts = ({ search, setSearch }: SearchExpertsProps) => {
  return (
    <div className="flex items-center bg-[#e5e7eb] px-2 pr-4 h-12 rounded-full">
      <Input
        placeholder="Search an expert"
        className="border-0 focus-visible:ring-0 shadow-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length > 0 ? (<X onClick={() => setSearch("")} />) : (<Search />)}
    </div>
  )
}

export default SearchExperts
