import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { useParams, useNavigate } from "react-router";
import useCrud from "../../../hooks/useCrud";
import {
  clientsChangeDataBeforeMutate,
  clientsDefaultValues,
  clientsInputArr,
  clientsSchema,
} from "./ClientsFormHelpers";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { CLIENT_PAGE_URL } from "@/navigation/urls";
import { clientEndpoints } from "@/api/endpoints/endpoints";

const ClientDetailFormPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const isCreate = clientId == "create";

  const { formUtils, handleSubmit, isMetaLoading, isSubmitting, metaData, prefillIsLoading } =
    useCrud({
      submitEndpoint: clientEndpoints.cud(clientId || ""),
      metaEndpoint: isCreate
        ? clientEndpoints.createMeta
        : clientEndpoints.updateMeta(clientId || ""),
      detailEndpoint: isCreate ? "" : clientEndpoints.updateDetail(clientId || ""),
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
          console.log('Client data', data);
          formUtils.reset(data?.data);
        }
      },
      defaultValues: clientsDefaultValues,
      schema: clientsSchema,
      changeDataBeforeMutate: (data: any) => clientsChangeDataBeforeMutate(data),
      onSubmitSuccess: () => {
        navigate(CLIENT_PAGE_URL);
      },
    });

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        title={isCreate ? "Add New Client" : "Edit Client"}
        description={isCreate ? "Create a new client record" : "Update client information"}
        backUrl={CLIENT_PAGE_URL}
      />

      <AppForm
        inputArr={clientsInputArr}
        onSubmit={handleSubmit}
        formUtils={formUtils}
        isLoading={isMetaLoading || prefillIsLoading}
        isSubmitting={isSubmitting}
      />
    </AppPageWrapper>
  );
};

export default ClientDetailFormPage;
