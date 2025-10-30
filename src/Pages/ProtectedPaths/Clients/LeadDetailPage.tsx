import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import CommonDetailHeader from "@/components/Commmon/CommonDetailHeader";
import PersonalDetails from "@/components/Commmon/PersonalDetails";
import RenovationCalculator from "@/components/Commmon/RenovationCalculator";
import { useParams, useNavigate } from "react-router";
import { LEAD_PAGE_URL } from "@/navigation/urls";

const LeadDetailPage = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual API data using leadId
  console.log("Lead ID:", leadId); // This will be used for API calls
  const leadData = {
    id: "#5626",
    name: "Randy Dorwart",
    date: "Jan 6, 2025",
    status: "NL",
    profileImage: undefined, // Add actual image URL if available
    phone: "+91 98765 43210",
    email: "Randydorwart@gmail.com",
    address: "-",
    location: "-",
    estimatedBudget: "Estimated Budget : ~$6,500 to $7,800",
    propertyDetails: {
      type: "Condo",
      condition: "New",
      size: "sqft",
      value: "2000",
    },
    roomsRenovating: {
      livingRoom: "1",
      bedrooms: "1",
    },
    worksRequired: {
      livingRoom: "Light",
      bedrooms: "Medium",
    },
  };

  return (
    <AppPageWrapper>
      {/* Header */}
      <CommonDetailHeader
        backLinkText="Back to leads"
        onBackClick={() => navigate(LEAD_PAGE_URL)}
        mainTitle={leadData.name}
        mainStatusTag={{
          label: leadData.status,
          color: "bg-blue-100 text-blue-800",
          hasDropdown: true,
        }}
        subTitle={`${leadData.id} • ${leadData.date}`}

        showExportButton={false}
      />

      {/* Content Sections */}
      <div className="space-y-6">
        {/* Personal Details */}
        <PersonalDetails
          profileImage={leadData.profileImage}
          fullName={leadData.name}
          phone={leadData.phone}
          email={leadData.email}
          address={leadData.address}
          location={leadData.location}
        />

        {/* Renovation Calculator */}
        <RenovationCalculator
          estimatedBudget={leadData.estimatedBudget}
          propertyDetails={leadData.propertyDetails}
          roomsRenovating={leadData.roomsRenovating}
          worklivingRoom={leadData.worksRequired.livingRoom}
          workbedrooms={leadData.worksRequired.bedrooms}
        />
      </div>
    </AppPageWrapper>
  );
};

export default LeadDetailPage;
