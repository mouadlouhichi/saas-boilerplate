import React, { FC, ReactNode } from "react";

import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import Button from "@/components/Button";

import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface PsychologistsListeningProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const PsychologistsListening: FC<PsychologistsListeningProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Meet Our Experienced Psychiatrists",
  subHeading = "Explore our skilled psychiatrists, What type of therapy are you seeking?",
  headingIsCenter,
  tabs = ["Individual", "Couples", "Family", "Child", "Adolescent", "Adult"],
  cardType = "card2"
}) => {
  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <HeaderFilter
        tabActive={"Individual"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {stayListings.map((stay) => (
          <StayCard key={stay.id} data={stay} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Button loading>Show me more</Button>
      </div>
    </div>
  );
};

export default PsychologistsListening;
