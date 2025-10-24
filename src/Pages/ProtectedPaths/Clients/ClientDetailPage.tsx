import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import CommonDetailHeader from "@/components/Commmon/CommonDetailHeader";
import PersonalDetails from "@/components/Commmon/PersonalDetails";
import RenovationCalculator from "@/components/Commmon/RenovationCalculator";
import WorksRequired from "@/components/Commmon/WorksRequired";
import { useParams, useNavigate } from "react-router";

const ClientDetailPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual API data
  const clientData = {
    id: "MID385626",
    project: "3BHK Interior - Prestige Lakes",
    clientName: "Randy Dorwart",
    status: "FC",
    clientStatus: "Active",
    profileImage: undefined, // Add actual image URL if available
    phone: "+91 98765 43210",
    email: "Randydorwart@gmail.com",
    address: "Prestige Lakes, Bangalore",
    location: "Bangalore, India",
    estimatedBudget: "Estimated Budget : ~$15,000 to $18,000",
    propertyDetails: {
      type: "Apartment",
      condition: "Existing",
      size: "sqft",
      value: "1200",
    },
    roomsRenovating: {
      livingRoom: "1",
      bedrooms: "3",
    },
    worksRequired: {
      livingRoom: "Heavy",
      bedrooms: "Medium",
    },
  };

  const handleExport = () => {
    console.log("Export client data");
    // Implement export functionality
  };

  const handleEditPersonalDetails = () => {
    console.log("Edit personal details");
    // Navigate to edit form or open modal
  };

  return (
    <AppPageWrapper>
      {/* Header */}
      <CommonDetailHeader
        backLinkText="Back to clients"
        onBackClick={() => navigate(-1)}
        mainTitle={`${clientData.id} / ${clientData.project}`}
        mainStatusTag={{
          label: clientData.status,
          color: "bg-green-100 text-green-800",
          hasDropdown: true,
        }}
        subTitle={clientData.clientName}
        subStatusTag={{
          label: clientData.clientStatus,
          color: "bg-green-50 text-green-700",
        }}
        onExportClick={handleExport}
        exportButtonLabel="Export"
        showExportButton={true}
      />

      {/* Content Sections */}
      <div className="space-y-6">
        {/* Personal Details */}
        <PersonalDetails
          profileImage={clientData.profileImage}
          fullName={clientData.clientName}
          phone={clientData.phone}
          email={clientData.email}
          address={clientData.address}
          location={clientData.location}
          onEdit={handleEditPersonalDetails}
          showEditButton={true}
        />

        {/* Renovation Calculator */}
        <RenovationCalculator
          estimatedBudget={clientData.estimatedBudget}
          propertyDetails={clientData.propertyDetails}
          roomsRenovating={clientData.roomsRenovating}
        />

        {/* Works Required */}
        <WorksRequired
          livingRoom={clientData.worksRequired.livingRoom}
          bedrooms={clientData.worksRequired.bedrooms}
          showAvatar={true}
        />
      </div>
    </AppPageWrapper>
  );
};

export default ClientDetailPage;