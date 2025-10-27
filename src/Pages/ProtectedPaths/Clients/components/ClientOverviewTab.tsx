import { useOutletContext } from "react-router";
import PersonalDetails from "@/components/Commmon/PersonalDetails";
import RenovationCalculator from "@/components/Commmon/RenovationCalculator";
import WorksRequired from "@/components/Commmon/WorksRequired";

const ClientOverviewTab = () => {
  const client = useOutletContext<any>() || {
    clientName: "Randy Dorwart",
    phone: "+91 98765 43210",
    email: "Randydorwart@gmail.com",
    address: "Prestige Lakes, Bangalore",
    location: "Bangalore, India",
  };

  const handleEditPersonalDetails = () => {
    console.log("Edit personal details");
  };

  const clientData = {
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

  return (
    <div className="space-y-6">
      {/* Personal Details */}
      <PersonalDetails
        profileImage={client.profileImage}
        fullName={client.clientName}
        phone={client.phone}
        email={client.email}
        address={client.address || "-"}
        location={client.location || "-"}
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
  );
};

export default ClientOverviewTab;

