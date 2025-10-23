import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { useParams, useNavigate } from "react-router";
import useCrud from "../../../hooks/useCrud";
import {
  designersChangeDataBeforeMutate,
  designersDefaultValues,
  designersInputArr,
  designersSchema,
} from "./DesignersFormHelpers";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { DESIGNER_PAGE_URL } from "@/navigation/urls";
import { designerEndpoints } from "@/api/endpoints/endpoints";

const DesignerDetailFormPage = () => {
  const { designerId } = useParams();
  const navigate = useNavigate();
  const isCreate = designerId == "create";

  const { formUtils, handleSubmit, isMetaLoading, isSubmitting, metaData, prefillIsLoading } =
    useCrud({
      submitEndpoint: designerEndpoints.cud(designerId || ""),
      metaEndpoint: isCreate
        ? designerEndpoints.createMeta
        : designerEndpoints.updateMeta(designerId || ""),
      detailEndpoint: isCreate ? "" : designerEndpoints.updateDetail(designerId || ""),
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
          console.log('Designer data', data);
          formUtils.reset(data?.data);
        }
      },
      defaultValues: designersDefaultValues,
      schema: designersSchema,
      changeDataBeforeMutate: (data: any) => designersChangeDataBeforeMutate(data),
      onSubmitSuccess: () => {
        navigate(DESIGNER_PAGE_URL);
      },
    });

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        title={isCreate ? "Add New Designer" : "Edit Designer"}
        description={isCreate ? "Create a new designer record" : "Update designer information"}
        onBackNavigateTo={DESIGNER_PAGE_URL}
      />

      <AppForm
        inputArr={designersInputArr}
        onSubmit={handleSubmit}
        formUtils={formUtils}
        isLoading={isMetaLoading || prefillIsLoading}
        isSubmitting={isSubmitting}
      />
    </AppPageWrapper>
  );
};

export default DesignerDetailFormPage;
