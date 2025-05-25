"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ExpertsCard from "./layout/experts-card"
import SectionIndicator from "./layout/section-indicator"
import SearchExperts from "./layout/search-experts"
import ExpertsCarousel from "./layout/experts-carousel"
import { Separator } from "@/components/ui/separator"
import CTA from "./CTA"
import { Suspense, useState, useMemo, useEffect, useRef } from "react"
import ExpertsCardSkeleton from "./layout/experts-card-skeleton"
import { useTranslation } from "react-i18next"
import { getMentors } from "@/actions/mentors"
import { Category, MentorProfile } from "@/types/mentors"
import { toast } from "sonner"
import { getCategories } from "@/actions/category"

const HomeLayout = () => {
  const { t } = useTranslation();

  const tabsListRef = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState<string>('')
  const [activeTab, setActiveTab] = useState<string>('all-experts')
  const [mentors, setMentors] = useState<MentorProfile[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollLeft = 0
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ mentors: mentorsData }, { categories: categoriesData }] = await Promise.all([
          getMentors(),
          getCategories(),
        ])

        if (mentorsData.length === 0) {
          toast.error(t("no_mentors_found"))
          return;
        }

        setMentors(mentorsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Failed to fetch mentors or categories:', error)
        toast.error(t("fetch_error"))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [t])

  const filteredMentors = useMemo(() => {
    let results = mentors

    // Filter by tab selection
    if (activeTab === 'top-experts') {
      results = results.filter(mentor => mentor.rating >= 4.5)
    } else if (activeTab === 'business-experts') {
      results = results.filter(mentor =>
        mentor.categories.some(category =>
          category.name.toLowerCase().includes('business')
        )
      )
    } else if (activeTab !== 'all-experts') {
      const categoryName = activeTab.split('-').join(' ')
      results = results.filter(mentor =>
        mentor.categories.some(category =>
          category.name.toLowerCase() === categoryName.toLowerCase()
        )
      )
    }

    // Filter by search query
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      results = results.filter(mentor =>
        (mentor.user.firstName?.toLowerCase() ?? "").includes(searchLower) ||
        (mentor.user.lastName?.toLowerCase() ?? "").includes(searchLower) ||
        mentor.bio.toLowerCase().includes(searchLower) ||
        mentor.categories.some(category =>
          category.name.toLowerCase().includes(searchLower)
        )
      );
    }

    return results
  }, [search, activeTab, mentors, t])

  // Group mentors by their primary category (first category in their list)
  const groupedMentors = useMemo(() => {
    const groups: Record<string, MentorProfile[]> = {}

    categories.forEach(category => {
      const categoryMentors = mentors.filter(mentor =>
        mentor.categories.some(c => c.id === category.id)
      )
      if (categoryMentors.length > 0) {
        groups[category.name] = categoryMentors
      }
    })

    return groups
  }, [categories, mentors])

  const renderMentorsGrid = (mentorsToRender: MentorProfile[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentorsToRender.map(mentor => (
        <Suspense key={mentor.id} fallback={<ExpertsCardSkeleton />}>
          <ExpertsCard mentor={mentor} />
        </Suspense>
      ))}
    </div>
  )

  const renderMentorsList = (mentorsToRender: MentorProfile[]) => (
    <div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-2 -mx-[22px] px-[22px]">
      {mentorsToRender.map(mentor => (
        <Suspense key={mentor.id} fallback={<ExpertsCardSkeleton />}>
          <ExpertsCard mentor={mentor} />
        </Suspense>
      ))}
    </div>
  )

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-500 text-lg">
        {t("loading")}...
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-4">
      <SearchExperts search={search} setSearch={setSearch} />

      {(!search || search.trim() === "") ? (
        <>
          <ExpertsCarousel />

          <div>
            <Tabs defaultValue="all-experts" onValueChange={setActiveTab}>
              <TabsList ref={tabsListRef} className="flex items-center justify-start bg-transparent overflow-x-auto whitespace-nowrap max-w-full scrollbar-thin">
                <TabsTrigger value="all-experts">{t('all_mentors')}</TabsTrigger>
                <TabsTrigger value="top-experts">{t('top_mentors')}</TabsTrigger>
                <TabsTrigger value="business-experts">{t('business')}</TabsTrigger>
                {categories.map(category => (
                  <TabsTrigger
                    key={category.id}
                    value={category.name.toLowerCase().split(' ').join('-')}
                  >
                    {category.name} ({category.mentors?.length || 0})
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all-experts">
                <SectionIndicator
                  className="pb-6"
                  highlightMainText={false}
                  mainText="all_experts_title"
                  text="all_experts_text"
                />
                {renderMentorsList(mentors)}
              </TabsContent>

              <TabsContent value="top-experts">
                <SectionIndicator
                  className="pb-6"
                  highlightMainText={false}
                  mainText="top_experts_title"
                  text="top_experts_text"
                />
                {renderMentorsList(mentors.filter(mentor => mentor.rating >= 4.5))}
              </TabsContent>

              <TabsContent value="business-experts">
                <SectionIndicator
                  className="pb-6"
                  highlightMainText={false}
                  mainText="business_experts_title"
                  text="business_experts_text"
                />
                {renderMentorsList(mentors.filter(mentor =>
                  mentor.categories.some(category =>
                    category.name.toLowerCase().includes('business')
                  )
                ))}
              </TabsContent>

              {categories.map(category => (
                <TabsContent
                  key={category.id}
                  value={category.name.toLowerCase().split(' ').join('-')}
                >
                  <SectionIndicator
                    className="pb-6"
                    highlightMainText={false}
                    mainText={category.name}
                    text={category.description}
                  />
                  {renderMentorsList(
                    mentors.filter(mentor =>
                      mentor.categories.some(c => c.id === category.id)
                    )
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {activeTab === "all-experts" && (
            <>
              {Object.entries(groupedMentors).map(([categoryName, mentors]) => (
                <div key={categoryName}>
                  <SectionIndicator
                    className="pb-6"
                    highlightMainText={false}
                    mainText={categoryName}
                    text={categories.find(c => c.name === categoryName)?.description || ''}
                  />
                  {renderMentorsList(mentors)}
                </div>
              ))}
            </>
          )}

          <Separator orientation="horizontal" className="border" />
          <CTA />
        </>
      ) : (
        <div className="py-4">
          {filteredMentors.length > 0 ? (
            <>
              <SectionIndicator
                className="pb-6"
                highlightMainText={false}
                mainText="search_results_title"
                text={t("search_results_text", { count: filteredMentors.length, query: search })}
              />
              {renderMentorsGrid(filteredMentors)}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500">{t("no_mentors_found")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default HomeLayout