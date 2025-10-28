import { useOutletContext } from "react-router";
import PersonalDetails from "@/components/Commmon/PersonalDetails";

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
    </div>
  );
};

export default ClientOverviewTab;

