import { FC } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

import { SurveyQuestion } from "@/data/survey";
import useSurveyStore from "@/hooks/useSurvey";
import Checkbox from "@/components/Checkbox";
import CustomRadio from "@/components/CustomRadio";
import CustomSelect from "@/components/CustomSelect";
import Radio from "@/components/Radio";

interface QuestionsProps {
  question: SurveyQuestion;
  index: string | number;
  nextStep: () => void;
  control: Control<FieldValues>; // Use FieldValues
  allFields?: FieldValues;
}

const Questions: FC<QuestionsProps> = ({
  question,
  index,
  nextStep,
  control
}) => {
  const { setIsNextDisabled } = useSurveyStore();

  switch (question.type) {
    case "radio":
      return (
        <div key={index}>
          <label className="text-lg font-semibold" htmlFor="">
            {question.title}
          </label>
          <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3">
            {question.options.map((option) => {
              return (
                <Controller
                  key={option.id}
                  name={question.name}
                  control={control}
                  render={({ field }) => (
                    <Radio
                      {...field}
                      id={option.id}
                      label={option.label}
                      value={option.value}
                      defaultChecked={option.defaultChecked}
                      onChange={() => {
                        field.onChange(option.value);
                      }}
                    />
                  )}
                />
              );
            })}
          </div>
        </div>
      );
    case "select":
      return (
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            {question.title}
          </label>
          <Controller
            name={question.name}
            control={control}
            render={({ field }) => (
              <CustomSelect
                {...field}
                isSearchable={false}
                options={question.options}
                className="mt-4 h-11"
                classNamePrefix={"custom-select"}
                nextStep={nextStep}
                onChange={(value) => {
                  field.onChange(value?.value);
                  setIsNextDisabled(false);
                  nextStep && nextStep();
                }}
              />
            )}
          />
        </div>
      );
    case "checkbox":
      return (
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            {question.title}
          </label>
          <div className=" mt-4 grid grid-cols-1 gap-4">
            {question.options.map((option) => {
              return (
                <Controller
                  key={option.id}
                  name={question.name}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      id={option.id}
                      label={option.label}
                      onChange={() => {
                        const newVelue = [...field.value];
                        newVelue.push(option.value);
                        field.onChange(newVelue);
                      }}
                    />
                  )}
                />
              );
            })}
          </div>
        </div>
      );

    case "customRadio":
      return (
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            {question.title}
          </label>
          <div className=" mt-4 grid grid-cols-1 gap-4">
            {question.options.map((option) => {
              return (
                <Controller
                  key={option.id}
                  name={question.name}
                  control={control}
                  render={({ field }) => (
                    <CustomRadio
                      {...field}
                      id={option.id}
                      label={option.label}
                      value={option.value}
                      onClick={() => {
                        field.onChange(option.value);
                        nextStep && nextStep();
                      }}
                    />
                  )}
                />
              );
            })}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Questions;
