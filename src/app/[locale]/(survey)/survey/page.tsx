"use client";

import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup"; // Import the resolver you are using (e.g., yup)

import { FieldValues, Resolver, useForm } from "react-hook-form";
import { Wizard } from "react-use-wizard";

import { initialFormState, surveyData, surveySchema } from "@/data/survey";
import IntroStep from "@/shared/Survey/IntroStep";
import LastStep from "@/shared/Survey/LastStep";
import Step from "@/shared/Survey/Step";

const SurveyPage = () => {
  const { control, watch } = useForm<FieldValues>({
    resolver: yupResolver(surveySchema) as any,
    shouldUnregister: false,
    defaultValues: initialFormState
  });

  const previousStep = React.useRef<number>(0);

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const allFields = watch();

  const renderSteps = () => {
    return surveyData.groups.map((group) => {
      return group.questions.map((item, id) => {
        return (
          <Step
            key={id}
            item={item}
            group={group}
            previousStep={previousStep}
            control={control}
            allFields={allFields}
          />
        );
      });
    });
  };
  return (
    <div className="SurveySection__wrap bg-white  pb-4 shadow dark:bg-neutral-800">
      <form>
        <Wizard>
          <IntroStep previousStep={previousStep} />
          {renderSteps()}
          <LastStep survey={allFields} />
        </Wizard>
      </form>
    </div>
  );
};

export default SurveyPage;
