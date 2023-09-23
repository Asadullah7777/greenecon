import React from "react";
import { ChallangeBanner } from "../../components/Challanges/ChallangesBanner";
import DeforestationClimate from "../../components/Challanges/Deforestation&Climate";
import WhatISDeforestation from "../../components/Challanges/WhatISDeforestation";
import WhatIsClimateChange from "../../components/Challanges/WhatISClimateChange";
import SolutionHighStandardCarbon from "../../components/Challanges/SolutionHighStandardCarbon";
import HowCarbonOffsetsWork from "../../components/Challanges/HowCarbonOffsetsWork";
import ChallangesMission from "../../components/Challanges/ChallangesMission";
import OurInivatives from "../../components/Challanges/OurInivatives";
import EffectsOfDeferestionCards from "../../components/Challanges/EffectsOfDeferestionCards";
import MissionButton from "../../components/Challanges/MissionButton";





const Challanges = () => {
  return (
    <div>
      <ChallangeBanner />
      <DeforestationClimate />
      <WhatISDeforestation />
      <EffectsOfDeferestionCards/>
      <WhatIsClimateChange />
      <SolutionHighStandardCarbon />
      <HowCarbonOffsetsWork />
      {/* <ChallangesMission /> */}
      <MissionButton/>
      {/* <OurInivatives/> */}
    </div>
  );
};

export default Challanges;