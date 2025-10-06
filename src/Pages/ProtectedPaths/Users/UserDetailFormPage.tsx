import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { useParams } from "react-router";
import useCrud from "../../../hooks/useCrud";
import {
  userChangeDataBeforeMutate,
  usersDefaultValues,
  usersInputArr,
  usersSchema,
} from "./UsersFormHelpers";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { USER_PAGE_URL } from "@/navigation/urls";

const UserDetailFormPage = () => {
  const { userId } = useParams();
  const isCreate = userId == "create";
  const { formUtils, handleSubmit, isMetaLoading, isSubmitting } = useCrud({
    submitEndpoint: "",
    metaEndpoint: "",
    detailEndpoint: "",
    isCreate: isCreate,
    onMetaAndDetailFetchSuccess: ({
      data,
      formUtils,
    }: {
      data: any;
      formUtils: any;
    }) => {
      // use this to reset the form to desired structure
      formUtils.reset(data);
    },
    defaultValues: usersDefaultValues,
    schema: usersSchema,
    changeDataBeforeMutate: (data: any) => userChangeDataBeforeMutate(data),
    onSubmitSuccess: () => {
      // handle success here
    },
    onSubmitError: () => {
      // handle error here
    },
  });

  const inputArr = usersInputArr(formUtils);

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton onBackNavigateTo={USER_PAGE_URL} title="User Detail" />
      <AppForm
        inputArr={inputArr}
        onSubmit={handleSubmit}
        formUtils={formUtils}
        isLoading={isMetaLoading}
        isSubmitting={isSubmitting}
      ></AppForm>
    </AppPageWrapper>
  );
};

export default UserDetailFormPage;
