import AppText from "@/components/Commmon/AppText";
    import ContractIcon from "@/icons/ContractIcon";
import GreenTickCircle from "@/icons/GreenTickCircle";
import { Download, Trash2 } from "lucide-react";

const Contract = () => {
  const file = {
    name: "Contract.pdf",
    createdOn: "23rd Sep 2025",
    verified: true,
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[8px] p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[#054D8B] rounded" />
          <span className="text-base font-semibold">Contract</span>
        </div>

        {/* File Row */}
        <div className="rounded-[8px] bg-[#E9EBEF80] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* File icon */}
            <ContractIcon />
            <div>
              <div className="flex items-center gap-2">
                <AppText type="p" className="font-bold text-sm text-primary">
                  {file.name}
                </AppText>
                {file.verified && (
                  <GreenTickCircle />
                )}
              </div>
              <AppText type="span" className="text-sm text-[#717182] font-normal">
                Created on {file.createdOn}
              </AppText>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 text-[#054D8B]">
              <Download className="w-4 h-4" /> Download
            </button>
            <button className="inline-flex items-center gap-2 text-[#E7000B]">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;

