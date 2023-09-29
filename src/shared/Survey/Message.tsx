import { FC } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface MessageProps {
  messageTitle?: string;
  messageBody?: string;
}
const Questions: FC<MessageProps> = ({ messageTitle, messageBody }) => {
  return (
    <div className="mt-4 flex  w-full justify-center rounded bg-primary-100 px-4 py-6">
      <div className="w-16 pr-4">
        <InformationCircleIcon className="h-[32px] w-[32px] text-primary-6000" />
      </div>
      <div className=" ">
        <h4 className="text-lg font-semibold text-primary-6000 md:text-xl">
          {" "}
          {messageTitle}
        </h4>
        <p className="mt-2 block text-sm text-primary-6000 dark:text-neutral-400  md:text-base">
          {messageBody}{" "}
        </p>
      </div>
    </div>
  );
};

export default Questions;
