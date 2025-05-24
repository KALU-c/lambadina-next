// import type { Category, MentorProfile } from "@/types/mentor";

// export const CATEGORIES: Category[] = [
//   {
//     id: 1,
//     name: "Business Strategy",
//     description: "Corporate planning and growth strategies",
//     created_at: "2023-01-15T09:00:00.000Z"
//   },
//   {
//     id: 2,
//     name: "Startup Consulting",
//     description: "Guidance for early-stage companies",
//     created_at: "2023-01-15T09:00:00.000Z"
//   },
//   {
//     id: 3,
//     name: "Financial Advisory",
//     description: "Investment and financial planning",
//     created_at: "2023-02-20T10:30:00.000Z"
//   },
//   {
//     id: 4,
//     name: "Marketing",
//     description: "Digital and traditional marketing strategies",
//     created_at: "2023-02-20T10:30:00.000Z"
//   },
//   {
//     id: 5,
//     name: "Leadership Coaching",
//     description: "Executive and management development",
//     created_at: "2023-03-10T11:45:00.000Z"
//   },
//   {
//     id: 6,
//     name: "Mental Wellness",
//     description: "Stress management and mental health",
//     created_at: "2023-03-10T11:45:00.000Z"
//   },
//   {
//     id: 7,
//     name: "Nutrition",
//     description: "Dietary planning and healthy eating",
//     created_at: "2023-04-05T14:15:00.000Z"
//   },
//   {
//     id: 8,
//     name: "Fitness Training",
//     description: "Physical health and exercise programs",
//     created_at: "2023-04-05T14:15:00.000Z"
//   },
//   {
//     id: 9,
//     name: "Corporate Law",
//     description: "Business legal structures and compliance",
//     created_at: "2023-05-12T16:20:00.000Z"
//   },
//   {
//     id: 10,
//     name: "Intellectual Property",
//     description: "Patents, trademarks, and copyrights",
//     created_at: "2023-05-12T16:20:00.000Z"
//   },
//   {
//     id: 11,
//     name: "Software Development",
//     description: "Coding and technical architecture",
//     created_at: "2023-06-18T08:45:00.000Z"
//   },
//   {
//     id: 12,
//     name: "AI & Machine Learning",
//     description: "Artificial intelligence technologies",
//     created_at: "2023-06-18T08:45:00.000Z"
//   },
//   {
//     id: 13,
//     name: "Cybersecurity",
//     description: "Data protection and digital security",
//     created_at: "2023-07-22T13:10:00.000Z"
//   },
//   {
//     id: 14,
//     name: "Blockchain",
//     description: "Cryptocurrency and distributed ledger tech",
//     created_at: "2023-07-22T13:10:00.000Z"
//   },
//   {
//     id: 15,
//     name: "Graphic Design",
//     description: "Visual communication and branding",
//     created_at: "2023-08-30T10:00:00.000Z"
//   },
//   {
//     id: 16,
//     name: "Content Creation",
//     description: "Writing, video, and multimedia production",
//     created_at: "2023-08-30T10:00:00.000Z"
//   },
//   {
//     id: 17,
//     name: "Social Media",
//     description: "Platform strategies and audience growth",
//     created_at: "2023-09-14T11:30:00.000Z"
//   },
//   {
//     id: 18,
//     name: "Public Relations",
//     description: "Media relations and brand reputation",
//     created_at: "2023-09-14T11:30:00.000Z"
//   },
//   {
//     id: 19,
//     name: "Human Resources",
//     description: "Talent management and org development",
//     created_at: "2023-10-05T15:45:00.000Z"
//   },
//   {
//     id: 20,
//     name: "Career Coaching",
//     description: "Professional development and advancement",
//     created_at: "2023-10-05T15:45:00.000Z"
//   }
// ];

// export const MENTORS: MentorProfile[] = [
//   {
//     id: 1,
//     user: {
//       id: 101,
//       username: "jane_doe",
//       email: "jane.doe@example.com",
//       first_name: "Jane",
//       last_name: "Doe",
//       phone_number: "+1234567890",
//       user_type: "mentor",
//       profile_picture: "https://i.pravatar.cc/150?img=1",
//       is_verified: true
//     },
//     bio: "Experienced business strategist with 10+ years in Fortune 500 companies.",
//     categories: [
//       CATEGORIES[0], // Business Strategy
//       CATEGORIES[4]  // Leadership Coaching
//     ],
//     price_per_minute: "5.00",
//     is_available: true,
//     rating: "4.9",
//     total_sessions: 245,
//     availabilities: [
//       { id: 1, day_of_week: 1, start_time: "09:00", end_time: "17:00", is_available: true, mentor: 1 },
//       { id: 2, day_of_week: 3, start_time: "10:00", end_time: "18:00", is_available: true, mentor: 1 }
//     ],
//     created_at: "2022-05-15",
//     updated_at: "2023-06-20"
//   },
//   {
//     id: 2,
//     user: {
//       id: 102,
//       username: "john_smith",
//       email: "john.smith@example.com",
//       first_name: "John",
//       last_name: "Smith",
//       phone_number: "+1987654321",
//       user_type: "mentor",
//       profile_picture: "https://i.pravatar.cc/150?img=5",
//       is_verified: true
//     },
//     bio: "Tech entrepreneur with multiple successful exits. Specializing in SaaS startups.",
//     categories: [
//       CATEGORIES[0],
//       CATEGORIES[10], // Software Development
//       CATEGORIES[1]   // Startup Consulting
//     ],
//     price_per_minute: "7.50",
//     is_available: true,
//     rating: "4.8",
//     total_sessions: 180,
//     availabilities: [
//       { id: 3, day_of_week: 2, start_time: "08:00", end_time: "16:00", is_available: true, mentor: 2 },
//       { id: 4, day_of_week: 4, start_time: "11:00", end_time: "19:00", is_available: true, mentor: 2 }
//     ],
//     created_at: "2021-11-10",
//     updated_at: "2023-07-15"
//   },
//   {
//     id: 3,
//     user: {
//       id: 103,
//       username: "sarah_johnson",
//       email: "sarah.j@example.com",
//       first_name: "Sarah",
//       last_name: "Johnson",
//       phone_number: "+1122334455",
//       user_type: "mentor",
//       profile_picture: "https://i.pravatar.cc/150?img=10",
//       is_verified: true
//     },
//     bio: "Corporate wellness coach helping professionals achieve work-life balance.",
//     categories: [
//       CATEGORIES[5], // Mental Wellness
//       CATEGORIES[6]  // Nutrition
//     ],
//     price_per_minute: "4.00",
//     is_available: true,
//     rating: "4.7",
//     total_sessions: 320,
//     availabilities: [
//       { id: 5, day_of_week: 1, start_time: "08:00", end_time: "12:00", is_available: true, mentor: 3 },
//       { id: 6, day_of_week: 5, start_time: "13:00", end_time: "17:00", is_available: true, mentor: 3 }
//     ],
//     created_at: "2020-08-22",
//     updated_at: "2023-08-01"
//   },
//   {
//     id: 4,
//     user: {
//       id: 104,
//       username: "michael_lee",
//       email: "michael.lee@example.com",
//       first_name: "Michael",
//       last_name: "Lee",
//       phone_number: "+1567890123",
//       user_type: "mentor",
//       profile_picture: "https://i.pravatar.cc/150?img=12",
//       is_verified: true
//     },
//     bio: "Legal consultant specializing in corporate compliance and regulations.",
//     categories: [
//       CATEGORIES[8], // Corporate Law
//       CATEGORIES[9]  // Intellectual Property
//     ],
//     price_per_minute: "6.50",
//     is_available: true,
//     rating: "4.9",
//     total_sessions: 275,
//     availabilities: [
//       { id: 7, day_of_week: 3, start_time: "09:00", end_time: "15:00", is_available: true, mentor: 4 },
//       { id: 8, day_of_week: 6, start_time: "10:00", end_time: "14:00", is_available: true, mentor: 4 }
//     ],
//     created_at: "2019-05-18",
//     updated_at: "2023-09-05"
//   },
//   {
//     id: 5,
//     user: {
//       id: 105,
//       username: "emily_chen",
//       email: "emily.chen@example.com",
//       first_name: "Emily",
//       last_name: "Chen",
//       phone_number: "+1654321890",
//       user_type: "mentor",
//       profile_picture: "https://i.pravatar.cc/150?img=15",
//       is_verified: true
//     },
//     bio: "Marketing expert with specialization in digital campaigns and brand strategy.",
//     categories: [
//       CATEGORIES[3], // Marketing
//       CATEGORIES[16] // Social Media
//     ],
//     price_per_minute: "6.00",
//     is_available: true,
//     rating: "4.8",
//     total_sessions: 190,
//     availabilities: [
//       { id: 9, day_of_week: 2, start_time: "10:00", end_time: "18:00", is_available: true, mentor: 5 },
//       { id: 10, day_of_week: 4, start_time: "09:00", end_time: "17:00", is_available: true, mentor: 5 }
//     ],
//     created_at: "2021-03-12",
//     updated_at: "2023-07-22"
//   },
//   // Additional mentors would follow the same pattern...
//   {
//     id: 50,
//     user: {
//       id: 150,
//       username: "david_wilson",
//       email: "david.w@example.com",
//       first_name: "David",
//       last_name: "Wilson",
//       phone_number: "+1908765432",
//       user_type: "mentor",
//       profile_picture: "https://i.pravatar.cc/150?img=60",
//       is_verified: true
//     },
//     bio: "Creative director with 15 years experience in advertising and media.",
//     categories: [
//       CATEGORIES[14], // Graphic Design
//       CATEGORIES[15]  // Content Creation
//     ],
//     price_per_minute: "8.00",
//     is_available: true,
//     rating: "4.8",
//     total_sessions: 420,
//     availabilities: [
//       { id: 99, day_of_week: 2, start_time: "10:00", end_time: "18:00", is_available: true, mentor: 50 },
//       { id: 100, day_of_week: 4, start_time: "09:00", end_time: "17:00", is_available: true, mentor: 50 }
//     ],
//     created_at: "2018-03-10",
//     updated_at: "2023-10-20"
//   }
// ];