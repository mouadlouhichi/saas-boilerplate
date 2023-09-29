import { FC, useEffect } from "react";
import { Control } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useWizard } from "react-use-wizard";

import { SurveyGroup, SurveyQuestion } from "@/data/survey";

import AnimatedStep from "./AnimatedStep";
import Message from "./Message";
import NextButton from "./NextButton";
import Question from "./Question";

interface StepProps {
  item: SurveyQuestion | SurveyQuestion[];
  group: SurveyGroup;
  previousStep: React.MutableRefObject<number>;
  control: Control<FieldValues>;
  allFields: FieldValues;
}

const Step: FC<StepProps> = ({
  item,
  group,
  previousStep,
  control,
  allFields
}) => {
  const { nextStep, activeStep, goToStep } = useWizard();
  useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
    if (isBrowser()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!Array.isArray(item)) {
      if (
        item.conditional &&
        item?.condition &&
        item.dependsOn &&
        allFields &&
        !item?.condition(allFields[item.dependsOn])
      ) {
        goToStep(activeStep + 1);
      }
    }
  }, [allFields, activeStep, goToStep, item]);
  if (Array.isArray(item)) {
    return (
      <>
        <div>
          <h2 className="that text-2xl font-semibold">{group.title} </h2>
          <p className="mt-2 block text-neutral-500 dark:text-neutral-400">
            {" "}
            {group.description}{" "}
          </p>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <AnimatedStep
          previousStep={previousStep}
          className="space-y-3 sm:space-y-4 "
        >
          {item.map((question, id) => {
            return (
              <div key={id}>
                <Question
                  question={question}
                  index={question.id}
                  nextStep={nextStep}
                  control={control}
                  allFields={allFields}
                />
                {question.message && (
                  <Message
                    messageTitle={question.messageTitle}
                    messageBody={question.messageBody}
                  />
                )}
              </div>
            );
          })}
          <NextButton />
        </AnimatedStep>
      </>
    );
  } else
    return !item.conditional ||
      (item.conditional &&
        item?.condition &&
        item.dependsOn &&
        allFields &&
        item?.condition(allFields[item.dependsOn])) ? (
      <>
        <div>
          <h2 className="text-2xl font-semibold">{group.title} </h2>
          <span className="mt-2 block text-neutral-500 dark:text-neutral-400">
            {" "}
            {group.description}{" "}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <AnimatedStep
          previousStep={previousStep}
          className="space-y-3 sm:space-y-4 "
        >
          <Question
            question={item}
            index={item.id}
            nextStep={nextStep}
            control={control}
          />

          {item.message && (
            <Message
              messageTitle={item.messageTitle}
              messageBody={item.messageBody}
            />
          )}
          {item.type !== "customRadio" && <NextButton />}
        </AnimatedStep>
      </>
    ) : (
      <></>
    );
};

export default Step;
