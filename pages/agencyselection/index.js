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
  StyledItemCard,
} from "./elements";
import { Card } from "../../collections/Card/index";

const agencySelectionBoldTexts = [
  `brief writing or simple guidance`,
  "criteria matching",
  "pitch management",
];

function makeBold(str) {
  return str.replace(str, "<b>" + str + "</b>");
}

function agencyselection() {
  return (
    <>
      <head></head>
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
            <Card
              width="47%"
              header="Brief"
              img="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-architecture-design-tools-xnimrodx-lineal-xnimrodx.png"
            >
              Complete <b>brief writing or simple guidance</b> on what to
              include, we&apos;ve got you covered.
            </Card>
            <Card
              width="50%"
              header="Search"
              img="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/000000/external-research-seo-and-digital-marketing-parzival-1997-detailed-outline-parzival-1997.png"
            >
              In-depth agency search covering; <b>criteria matching,</b> door
              knocking and due-diligence vetting.
            </Card>
            <Card
              width="53%"
              header="Pitch"
              img="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-meeting-team-management-xnimrodx-lineal-xnimrodx.png"
            >
              Comprehensive <b>pitch management,</b> including comms, diary
              management and pitch hosting.
            </Card>
          </StyledItemContainer>
        </StyledContainer>
      </LayoutWrapper>
    </>
  );
}

export default agencyselection;
