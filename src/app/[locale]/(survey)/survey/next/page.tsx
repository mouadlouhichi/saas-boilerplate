/* TODO:
 * POST Survey data
 * hasSurvey -> true
 * Redirect To Choose or PLP (psychologist list page)
 */

"use client";

import { trpc } from "@/providers/trpcProvider";
import toast from "react-hot-toast";
import { StateStorage, StorageValue } from "zustand/middleware";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { initialSurveyState, SurveyStateProps } from "@/hooks/useSurvey";
import Button from "@/components/Button";

function Next() {
  //   add new product
  const { mutate: saveSurvey, isLoading } =
    trpc.survey.createSurvey.useMutation({
      retry: false,
      onSuccess: (res) => {
        toast.success(`${res.id} data successfully added`);
      },
      onError: (err) => toast.error(err.message)
    });
  const [surveyStorage] = useLocalStorage<StorageValue<SurveyStateProps>>(
    "survey-storage",
    { ...initialSurveyState }
  );
  const surveyData = {
    ...surveyStorage.state.survey,
    user: surveyStorage.state.user
  };
  console.log(surveyData);
  return (
    <div className="SurveySection__wrap bg-white  pb-4 shadow dark:bg-neutral-800">
      Next here to post data
      {isLoading && <div>Loading...</div>}
      <Button
        onClick={() => {
          saveSurvey(surveyData);
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default Next;
