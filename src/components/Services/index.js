import React from "react";
import Icon1 from "../../images/svg_1.svg";
import Icon2 from "../../images/svg_2.svg";
import Icon3 from "../../images/svg_3.svg";

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
      <ServicesH1>Our Services</ServicesH1>
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
          <ServicesIcon src={Icon3} />
          <ServicesH2>MOBILE PAYMENT</ServicesH2>
          <ServicesP>
            Grab a coffee while your guests are paying their checks through
            their mobile phones
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>24/7 SUPPORT</ServicesH2>
          <ServicesP>
            Our support team helps you online 24/7 on our website
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>INTEGRATIONS</ServicesH2>
          <ServicesP>
            FineDine integrates more than 30 platforms to streamline your
            restaurant’s ordering process
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
