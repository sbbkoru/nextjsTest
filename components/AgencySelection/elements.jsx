import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import img from "../../resources/background.png";

export const LayoutWrapper = styled(({ ...props }) => <div {...props} />)`
  width: 75%;
  margin: auto;

  @media (max-width: 60rem) {
    margin: 0.25rem;
    width: 100%;
  }
`;

/* export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`

`; */

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  margin-top: 4.688rem;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledItemContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;

  text-align: center;
  flex-direction: row;
  padding: 10px;
  margin-top: 4rem;

  @media (max-width: 60rem) {
    flex-direction: column;
  }
`;

export const StyledItemImage = styled(({ ...props }) => <div {...props} />)`
  flex: 30%;
  padding: 20px;
  margin: auto;
  width: 55%;
`;

export const StyledCardList = styled(({ ...props }) => <div {...props} />)`
  flex: 55%;
  padding: 20px;
`;

export const StyledCardItemClass = styled(({ ...props }) => <div {...props} />)`
  padding: 1rem;
`;

export const StyledItemCard = styled(({ ...props }) => <div {...props} />)`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 3rem;
  border-radius: 0.313rem;
  text-align: left;
  background-color: #f9f9f9;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  line-height: 1;
  font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  } ;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0.5rem 0 0;
  line-height: 1;
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  } ;
`;
