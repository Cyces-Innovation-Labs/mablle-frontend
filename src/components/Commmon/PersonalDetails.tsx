import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Phone, Mail, User, PencilLine } from "lucide-react";

interface PersonalDetailsProps {
  profileImage?: string;
  fullName: string;
  phone: string;
  email: string;
  address?: string;
  location?: string;
  onEdit?: () => void;
  showEditButton?: boolean;
}

const PersonalDetails = ({
  profileImage,
  fullName,
  phone,
  email,
  address = "-",
  location = "-",
  onEdit,
  showEditButton = true,
}: PersonalDetailsProps) => {
  return (
    <div className="space-y-4">


      {/* Content Card */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col gap-6">
              {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-6 bg-[#054D8B] rounded"></div>
          <AppText type="h3" className="text-lg font-semibold text-gray-900">
            Personal Details
          </AppText>
        </div>
        {showEditButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
          >
            
            <span className="text-sm font-semibold text-[#054D8B] underline">Edit</span>
            <PencilLine className="w-4 h-4 text-[#054D8B]" />
          </Button>
        )}
      </div>
        <div className="flex items-start space-x-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {profileImage ? (
              <img
                src={profileImage}
                alt={fullName}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Full Name */}
              <div>
                <AppText type="span" className="text-sm font-medium text-gray-500 tracking-wide">
                  Full Name
                </AppText>
                <AppText type="p" className="text-gray-900 font-medium mt-1">
                  {fullName}
                </AppText>
              </div>

              {/* Phone */}
              <div>
                    <AppText type="span" className="text-sm font-medium text-gray-500 tracking-wide flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />  Phone
                </AppText>
                <div className="flex items-center space-x-2 mt-1">
                  
                  <AppText type="p" className="text-gray-900">
                    {phone}
                  </AppText>
                </div>
              </div>

              {/* Email */}
              <div>
                <AppText type="span" className="text-sm font-medium text-gray-500 tracking-wide flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />  Email
                </AppText>
                <div className="flex items-center space-x-2 mt-1">
                  
                  <AppText type="p" className="text-gray-900">
                    {email}
                  </AppText>
                </div>
              </div>

              {/* Address */}
              <div>
                <AppText type="span" className="text-sm font-medium text-gray-500 tracking-wide">
                  Address
                </AppText>
                <div className="flex items-center space-x-2 mt-1">
                  <AppText type="p" className="text-gray-900">
                    {address}
                  </AppText>
                </div>
              </div>

              {/* Location */}
              <div>
                <AppText type="span" className="text-sm font-medium text-gray-500 tracking-wide">
                  Location
                </AppText>
                <div className="flex items-center space-x-2 mt-1">
                  <AppText type="p" className="text-gray-900">
                    {location}
                  </AppText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
