import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { useParams, useNavigate } from "react-router";
import useCrud from "../../../hooks/useCrud";
import {
  userChangeDataBeforeMutate,
  userChangeDataBeforePrefill,
  usersDefaultValues,
  usersInputArr,
  usersSchema,
} from "./UsersFormHelpers";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { USER_PAGE_URL } from "@/navigation/urls";
import { metaEndpoints, userEndpoints } from "@/api/endpoints/endpoints";
import useGetSearchMeta from "@/hooks/useGetSearchMeta";
 
const UserDetailFormPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const isCreate = userId == "create";


  const { formUtils, handleSubmit, isMetaLoading, isSubmitting, metaData, prefillIsLoading } =
    useCrud({
      submitEndpoint: userEndpoints.cud(userId || ""),
      metaEndpoint: isCreate
        ? userEndpoints.createMeta
        : userEndpoints.updateMeta(userId || ""),
      detailEndpoint: isCreate ? "" : userEndpoints.updateDetail(userId || ""),
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
          const modData = userChangeDataBeforePrefill(data?.data)
          console.log('modData', data);
          formUtils.reset(modData);
        }
      },
      defaultValues: usersDefaultValues,
      schema: usersSchema,
      changeDataBeforeMutate: (data: any) => userChangeDataBeforeMutate(data),
      onSubmitSuccess: () => {
        navigate(USER_PAGE_URL);
      },

    });

  const {
    data: regionData,
    // isLoading: isRegionLoading,
    setSearch: setRegionSearch,
    // search: regionSearch,
  } = useGetSearchMeta({ endpoint: metaEndpoints.region });

  console.log("formUtils", prefillIsLoading);

  const inputArr = usersInputArr(formUtils, metaData, regionData, setRegionSearch);

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        onBackNavigateTo={USER_PAGE_URL}
        title={isCreate ? "Create User" : "Edit User"}
      />
      <AppForm
        inputArr={inputArr}
        onSubmit={handleSubmit}
        formUtils={formUtils}
        isLoading={isMetaLoading || prefillIsLoading}
        isSubmitting={isSubmitting}
      />
    </AppPageWrapper>
  );
};

export default UserDetailFormPage;
