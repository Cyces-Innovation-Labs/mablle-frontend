import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { useParams, useNavigate } from "react-router";
import useCrud from "../../../hooks/useCrud";
import {
  leadsChangeDataBeforeMutate,
  leadsDefaultValues,
  leadsInputArr,
  leadsSchema,
} from "./LeadsFormHelpers";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { LEAD_PAGE_URL } from "@/navigation/urls";
import { clientEndpoints } from "@/api/endpoints/endpoints";

const LeadDetailFormPage = () => {
  const { leadId } = useParams();
  const navigate = useNavigate();
  const isCreate = leadId == "create";

  const { formUtils, handleSubmit, isMetaLoading, isSubmitting, prefillIsLoading } =
    useCrud({
      submitEndpoint: clientEndpoints.cud(leadId || ""),
      metaEndpoint: isCreate
        ? clientEndpoints.createMeta
        : clientEndpoints.updateMeta(leadId || ""),
      detailEndpoint: isCreate ? "" : clientEndpoints.updateDetail(leadId || ""),
      isCreate: isCreate,
      onMetaAndDetailFetchSuccess: async ({
        data,
        formUtils,
      }: {
        data: any;
        formUtils: any;
      }) => {
        // use this to reset the form to desired structure
        if (data && !isCreate) {
          console.log('Lead data', data);
          formUtils.reset(data?.data);
        }
      },
      defaultValues: leadsDefaultValues,
      schema: leadsSchema,
      changeDataBeforeMutate: (data: any) => leadsChangeDataBeforeMutate(data),
      onSubmitSuccess: () => {
        navigate(LEAD_PAGE_URL);
      },
    });

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        title={isCreate ? "Create a new Lead" : "Edit Lead"}
        description={isCreate ? "Lorem ipsum dolor sit amet consectetur." : "Update lead information"}
        onBackNavigateTo={LEAD_PAGE_URL}
      />

      <AppForm
        inputArr={leadsInputArr}
        onSubmit={handleSubmit}
        formUtils={formUtils}
        isLoading={isMetaLoading || prefillIsLoading}
        isSubmitting={isSubmitting}
      />
    </AppPageWrapper>
  );
};

export default LeadDetailFormPage;
