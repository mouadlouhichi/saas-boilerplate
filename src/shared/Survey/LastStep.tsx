"use client";

import { use, useEffect } from "react";
import { useLocale } from "next-intl";

import useSurveyStore from "@/hooks/useSurvey";
import Auth from "@/shared/Auth/Auth";

interface Props {
  survey: any;
}

function LastStep({ survey }: Props) {
  const lng = useLocale();
  const callbackUrl = `/${lng}/survey/next`;
  const { setSurvey } = useSurveyStore();
  useEffect(() => {
    setSurvey(survey);
  }, [survey]);

  return (
    <Auth
      heading="Create account"
      description="Login with Social Media or enter your details."
      callbackUrl={callbackUrl}
    />
  );
}

export default LastStep;
