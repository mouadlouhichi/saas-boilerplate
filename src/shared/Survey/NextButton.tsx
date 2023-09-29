import { useWizard } from "react-use-wizard";

import useSurveyStore from "@/hooks/useSurvey";
import Button from "@/components/Button";

const NextButton = () => {
  const { nextStep } = useWizard();
  const { isNextDisabled } = useSurveyStore();

  return (
    <div className="mt-2 flex justify-end space-x-5">
      <Button
        className="px-10 text-base sm:px-12 md:text-lg"
        onClick={() => nextStep()}
        disabled={isNextDisabled}
      >
        Next
      </Button>
    </div>
  );
};

export default NextButton;
