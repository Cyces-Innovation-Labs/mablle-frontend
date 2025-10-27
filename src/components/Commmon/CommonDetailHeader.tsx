import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Download, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import React from "react";

interface StatusTag {
  label: string;
  color: string;
  hasDropdown?: boolean;
}

interface CommonDetailHeaderProps {
  backLinkText: string;
  onBackClick?: () => void;
  mainTitle: string;
  mainStatusTag?: StatusTag;
  subTitle?: string | React.ReactNode;
  subStatusTag?: StatusTag;
  onExportClick?: () => void;
  exportButtonLabel?: string;
  showExportButton?: boolean;
  // Switch props (optional)
  showSwitch?: boolean;
  switchLabel?: string;
  switchChecked?: boolean;
  onSwitchChange?: (checked: boolean) => void;
}

const CommonDetailHeader = ({
  backLinkText,
  onBackClick,
  mainTitle,
  mainStatusTag,
  subTitle,
  subStatusTag,
  onExportClick,
  exportButtonLabel = "Export",
  showExportButton = true,
  showSwitch = false,
  switchLabel,
  switchChecked = false,
  onSwitchChange,
}: CommonDetailHeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-2 mb-6">
      {/* Left Section - Navigation and Title */}
      <div className="flex-1">
        {/* Back Navigation */}
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <AppText type="span" className="text-sm">
              {backLinkText}
            </AppText>
          </button>
        </div>

        {/* Main Title Block */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <AppText type="h1" className="text-2xl font-bold text-gray-900">
              {mainTitle}
            </AppText>
            {mainStatusTag && (
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${mainStatusTag.color}`}>
                <div className="flex items-center space-x-1">
                  <AppText type="span" className="text-sm font-medium">
                    {mainStatusTag.label}
                  </AppText>
                  {mainStatusTag.hasDropdown && (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sub Title and Status */}
          {(subTitle || subStatusTag) && (
            <div className="flex items-center space-x-3">
              {subTitle && (
                typeof subTitle === 'string' ? (
                  <AppText type="p" className="text-gray-600">
                    {subTitle}
                  </AppText>
                ) : (
                  subTitle
                )
              )}
              {subStatusTag && (
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${subStatusTag.color}`}>
                  <AppText type="span" className="text-xs font-medium">
                    {subStatusTag.label}
                  </AppText>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Switch and Export Button */}
      <div className="flex items-center space-x-4">
        {/* Switch */}
        {showSwitch && (
          <div className="flex items-center space-x-2">
            {switchLabel && (
              <AppText type="span" className="text-sm text-gray-600">
                {switchLabel}
              </AppText>
            )}
            <Switch
              checked={switchChecked}
              onCheckedChange={onSwitchChange}
            />
            
          </div>
        )}

        {/* Export Button */}
        {showExportButton && (
          <div className="flex-shrink-0">
            <Button
              onClick={onExportClick}
              variant="outline"
              className="flex items-center space-x-2 bg-[#9C6E611A] text-primary hover:bg-[#9C6E611A]/90"
            >
              <Download className="w-4 h-4" />
              <span>{exportButtonLabel}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonDetailHeader;
