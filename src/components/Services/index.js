import React from "react";
import Icon3 from "../../images/icon_3.svg";
import Icon2 from "../../images/icon_2.svg";
import Icon1 from "../../images/icon_1.svg";
import Icon4 from "../../images/icon_4.svg";
import Icon5 from "../../images/icon_5.svg";
import Icon6 from "../../images/icon_6.svg";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Features</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>CUSTOMIZED BRANDING</ServicesH2>
          <ServicesP>
            Change colors, fonts, add your logo and reflect your branding with
            one click
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>WEEKLY ANALYSIS</ServicesH2>
          <ServicesP>
            FineDine keeps track of what your customers do to help you with menu
            engineering.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>SMART RECOMMENDATIONS</ServicesH2>
          <ServicesP>
            FineDines AI-powered technology identifies the most preferred order
            combinations of items.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>MOBILE PAYMENT</ServicesH2>
          <ServicesP>
            Grab a coffee while your guests are paying their checks through
            their mobile phones
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>24/7 SUPPORT</ServicesH2>
          <ServicesP>
            Our support team helps you online 24/7 on our website
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>GAMIFICATION ENGINE</ServicesH2>
          <ServicesP>
            Boost Customer Engagement and Retention in Multiple Ways
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
