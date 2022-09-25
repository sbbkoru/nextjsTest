import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import img from "../../resources/background.png";

export const LayoutWrapper = styled(({ ...props }) => <div {...props} />)`
    background-image: url(${img.src});
    width:  125rem;
    height: 125rem;
  }
`;

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  text-align: center;
  display: block;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin: auto;
  margin-top: 4.688rem;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledItemContainer = styled(({ ...props }) => <div {...props} />)`
  flexbox: flex;
  color: black;
  width: 50%;
  margin: auto;
  margin-top: 4.688rem;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledItemImage = styled(({ ...props }) => <div {...props} />)`
  float: left;
  width: 35%;
`;

export const StyledItemCard = styled(({ ...props }) => <div {...props} />)`
  float: left;
  width: 50%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 5rem;
  border-radius: 0.313rem;
  height: 8.75rem;
  background-color: #f9f9f9;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  line-height: 1;
  font-size: 2.5rem;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0.625rem 0 0;
  line-height: 1;
`;
