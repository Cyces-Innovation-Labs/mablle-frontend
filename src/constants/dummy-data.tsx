export const dummyTableHeaders = {
  columns: {
    full_name: "Name",
    email: "Email",
    phone_number: "Phone Number",
    created_at: "Created At",
    updated_at: "Updated At",
    status: "Status",
  },
  status_code: 200,
};

export const dummyTableData = {
  data: {
    page: 1,
    total: 100,
    results: [
      {
        id: "231432",
        full_name: "Vishal",
        email: "anaconda@example.com",
        phone_number: "+1234567890",
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        status: "Active",
      },
      {
        id: "2342312",
        full_name: "Arnold schwashzerfurgur",
        email: "arnold@example.com",
        phone_number: "+1234567890",
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        status: "Active",
      },
      {
        id: "231590682",
        full_name: "Washington Vetrivel",
        email: "vetri@example.com",
        phone_number: "+1234567890",
        created_at: "2021-01-01",
        updated_at: "2021-01-01",
        status: "Active",
      },
    ],
  },
};

// Dummy data for Leads
export const dummyLeadsData = Array.from({ length: 50 }, (_, i) => ({
  id: `5626${i + 1}`,
  lead_id: `#${5626 + i}`,
  lead_name: [
    "Randy Dorwart",
    "Sarah Johnson",
    "Michael Chen",
    "Emma Wilson",
    "David Lee",
    "Lisa Anderson",
    "Tom Harris",
    "Amy Garcia",
    "Chris Martinez",
    "Patricia Brown",
  ][i % 10],
  source: ["Reno Calculator", "WhatsApp", "Website", "Referral", "Facebook"][i % 5],
  email: [
    "randydorwart@gmail.com",
    "sarah.johnson@email.com",
    "michael.chen@email.com",
    "emma.wilson@email.com",
    "david.lee@email.com",
    "lisa.anderson@email.com",
    "tom.harris@email.com",
    "amy.garcia@email.com",
    "chris.martinez@email.com",
    "patricia.brown@email.com",
  ][i % 10],
  mobile: `989989894${i % 10}`,
  status: ["NL", "QL", "BK", "CF", "FC", "HO"][i % 6],
  created_at: "Jan 6, 2025",
  avatar: i % 3 === 0 ? undefined : `RM`,
}));

// Dummy data for Designers
export const dummyDesignersData = Array.from({ length: 50 }, (_, i) => ({
  id: `designer${i + 1}`,
  designer_name: [
    "Lincoln Aminoff",
    "Rajesh Kumar",
    "Randy Dorwart",
    "Sarah Johnson",
    "Michael Chen",
    "Emma Wilson",
    "David Lee",
    "Lisa Anderson",
    "Tom Harris",
    "Amy Garcia",
  ][i % 10],
  role: ["Seller", "Executor", "Seller", "Executor", "Seller", "Executor", "Seller", "Executor", "Seller", "Executor"][i % 10],
  email: `designer${i + 1}@example.com`,
  mobile: `989989894${i % 10}`,
  active_projects: [2, 10, 5, 17, 8, 1, 2, 12, 23, 5][i % 10],
  last_login: "06/01/25, 10:20",
  status: i % 5 === 0 ? "InActive" : "Active",
  avatar: i % 3 === 0 ? undefined : `LA`,
}));

// Dummy data for Clients
export const dummyClientsData = Array.from({ length: 50 }, (_, i) => ({
  id: `client${i + 1}`,
  client_name: [
    "Randy Dorwart",
    "Sarah Johnson",
    "Michael Chen",
    "Emma Wilson",
    "David Lee",
    "Lisa Anderson",
    "Tom Harris",
    "Amy Garcia",
    "Chris Martinez",
    "Patricia Brown",
  ][i % 10],
  email: [
    "randydorwart@gmail.com",
    "sarah.johnson@email.com",
    "michael.chen@email.com",
    "emma.wilson@email.com",
    "david.lee@email.com",
    "lisa.anderson@email.com",
    "tom.harris@email.com",
    "amy.garcia@email.com",
    "chris.martinez@email.com",
    "patricia.brown@email.com",
  ][i % 10],
  mobile: `989989894${i % 10}`,
  address: `Address Line ${i + 1}, City, State`,
  created_at: new Date(2024, 0, Math.floor(Math.random() * 365)).toLocaleDateString(),
  status: i % 3 === 0 ? "Inactive" : "Active",
  avatar: i % 3 === 0 ? undefined : `RD`,
}));

// Dummy data for Projects
export const dummyProjectsData = Array.from({ length: 50 }, (_, i) => ({
  id: `project${i + 1}`,
  project_number: "#MID385626",
  client_name: [
    "Randy Dorwart",
    "Sarah Johnson",
    "Michael Chen",
    "Emma Wilson",
    "David Lee",
  ][i % 5],
  designer: "Lincoln Aminoff",
  project_started: "Jan 6, 2025",
  mobile: "9899898946",
  status: ["FC", "HO", "QL", "CF", "BK"][i % 5],
  project_status: i % 3 === 0 ? "Closed" : "Active",
  created_at: "Jan 6, 2025",
}));

// Helper function to get paginated data
export const getPaginatedData = (data: any[], page: number, pageSize: number = 10) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return {
    data: data.slice(startIndex, endIndex),
    page,
    total: data.length,
    pageSize,
  };
};