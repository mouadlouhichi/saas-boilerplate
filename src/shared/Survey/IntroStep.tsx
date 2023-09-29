import { FC } from "react";
import { useWizard } from "react-use-wizard";

import Button from "@/components/Button";

import AnimatedStep from "./AnimatedStep";

interface IntroStepProps {
  previousStep: React.MutableRefObject<number>;
}

// Could be replace as a normal step
const IntroStep: FC<IntroStepProps> = ({ previousStep }) => {
  const { nextStep } = useWizard();

  return (
    <AnimatedStep
      previousStep={previousStep}
      className="space-y-3 sm:space-y-4 "
    >
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <h2 className="text-xl font-semibold md:text-2xl">
        {" "}
        We need to ask you about personal health information
      </h2>
      <p className="mt-4 block text-justify text-sm  text-neutral-500 dark:text-neutral-400 md:text-base">
        To match you with a therapist and provide therapy and related services,
        we may collect data that is considered &quot; sensitive protected &quot;
        under EU laws. Accordingly, we need your consent to collect and use it.
      </p>
      <div>
        <Button className=" float-right  mt-8" onClick={() => nextStep()}>
          I Agree
        </Button>
      </div>
    </AnimatedStep>
  );
};
export default IntroStep;
