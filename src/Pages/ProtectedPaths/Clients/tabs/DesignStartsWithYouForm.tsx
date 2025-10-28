import AppText from "@/components/Commmon/AppText";
// import { useOutletContext } from "react-router";

const DesignStartsWithYouForm = () => {
  // const client = useOutletContext<any>();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <AppText type="h2" className="text-xl font-semibold text-gray-900 mb-4">
          Design Starts with You Form
        </AppText>
        <AppText type="p" className="text-gray-600">
          Design starts with you form content will be displayed here.
        </AppText>
      </div>
    </div>
  );
};

export default DesignStartsWithYouForm;

