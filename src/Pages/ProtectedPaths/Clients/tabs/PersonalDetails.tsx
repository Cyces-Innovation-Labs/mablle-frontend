import { useOutletContext } from "react-router";
import PersonalDetailsComponent from "@/components/Commmon/PersonalDetails";


const PersonalDetails = () => {
  const client = useOutletContext<any>() || {
    clientName: "Randy Dorwart",
    phone: "+91 98765 43210",
    email: "Randydorwart@gmail.com",
    address: "Prestige Lakes, Bangalore",
    location: "Bangalore, India",
  };

  return (
    <div className="space-y-6">
      {/* Personal Details */}
      <PersonalDetailsComponent
        profileImage={client.profileImage}
        fullName={client.clientName}
        phone={client.phone}
        email={client.email}
        address={client.address || "-"}
        location={client.location || "-"}
      />
    </div>
  );
};

export default PersonalDetails;

