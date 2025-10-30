import PersonalDetails from "@/components/Commmon/PersonalDetails";
import StatisticsCards from "./components/StatisticsCards";
import RatingSection from "./components/RatingSection";
import TasksUpdates from "./components/TasksUpdates";
import { useOutletContext } from "react-router";

const DesignerOverviewPage = () => {
  const designer = useOutletContext<any>() || {
    name: "Lincoln Aminoff",
    phone: "+91 98765 43210",
    email: "lincolnaminoff@gmail.com",
    joinedDate: "23rd Sep, 2025",
    avatar: "",
  };

  // Mock data for statistics - matching the image design
  const statistics = [
    { label: "Active projects", value: "20", variant: "primary" as const },
    { label: "QL", value: "12", variant: "default" as const, showDropdown: true },
    { label: "BK", value: "3", variant: "default" as const, showDropdown: true },
    { label: "CF", value: "3", variant: "default" as const, showDropdown: true },
    { label: "FC", value: "5", variant: "default" as const, showDropdown: true },
    { label: "HOs this month", value: "5", variant: "default" as const },
  ];

  // Mock rating data
  const ratingDistribution = {
    "5": 15,
    "4": 6,
    "3": 2,
    "2": 0,
    "1": 0,
  };

  // Mock tasks and updates
  const tasksUpdates = [
    { label: "Pending Tasks", count: 2, color: "red" as const },
    { label: "Upcoming Meeting", count: 2, color: "orange" as const },
    { label: "Updates", count: 1, color: "purple" as const },
  ];

  const handleAddReview = () => {
    console.log("Add review");
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards Section */}
      <StatisticsCards stats={statistics} totalCount={50} />

      {/* Main Content Grid */}
      <PersonalDetails
            profileImage={designer.avatar}
            fullName={designer.name}
            phone={designer.phone}
            email={designer.email}
            address={designer.address || "-"}
            location={designer.location || "-"}
          />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Column */}
        <div className="space-y-6">

          {/* Rating Section */}
          <RatingSection
            averageRating={4.7}
            ratingDistribution={ratingDistribution}
            totalRatings={23}
            onAddReview={handleAddReview}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Tasks and Updates */}
          <TasksUpdates items={tasksUpdates} />
        </div>
      </div>
    </div>
  );
};

export default DesignerOverviewPage;

