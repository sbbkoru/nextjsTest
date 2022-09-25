import React from "react";
import Image from "next/dist/client/image";
import cardImg from "../../resources/video.png";
import {
  StyledContainer,
  StyledTextContainer,
  LayoutWrapper,
  StyledTitle,
  StyledDescription,
  StyledItemContainer,
  StyledItemImage,
  StyledCardList,
  StyledCardItemClass,
} from "../../components/AgencySelection/elements.jsx";
import { Card } from "../../collections/Card/index";

function agencyselection() {
  return (
    <>
      <LayoutWrapper>
        <StyledContainer>
          <StyledTextContainer>
            <StyledTitle>Managed agency selection</StyledTitle>
            <StyledDescription>
              Strenghten your onboarding process
            </StyledDescription>
          </StyledTextContainer>
          <StyledItemContainer>
            <StyledItemImage>
              <Image
                layout="responsive"
                src={cardImg.src}
                alt="Video Image"
                width={90}
                height={145}
              />
            </StyledItemImage>
            <StyledCardList>
              <StyledCardItemClass>
                <Card
                  width="89%"
                  header="Brief"
                  img="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-architecture-design-tools-xnimrodx-lineal-xnimrodx.png"
                >
                  Complete <b>brief writing or simple guidance</b> on what to
                  include, we&apos;ve got you covered.
                </Card>
              </StyledCardItemClass>
              <StyledCardItemClass>
                <Card
                  width="92%"
                  header="Search"
                  img="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/000000/external-research-seo-and-digital-marketing-parzival-1997-detailed-outline-parzival-1997.png"
                >
                  In-depth agency search covering; <b>criteria matching,</b>{" "}
                  door knocking and due-diligence vetting.
                </Card>
              </StyledCardItemClass>
              <StyledCardItemClass>
                <Card
                  width="95%"
                  header="Pitch"
                  img="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-meeting-team-management-xnimrodx-lineal-xnimrodx.png"
                >
                  Comprehensive <b>pitch management,</b> including comms, diary
                  management and pitch hosting.
                </Card>
              </StyledCardItemClass>
            </StyledCardList>
          </StyledItemContainer>
        </StyledContainer>
      </LayoutWrapper>
    </>
  );
}

export default agencyselection;
