import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import img from "../../resources/background.png";

export const LayoutWrapper = styled(({ ...props }) => <div {...props} />)`
  background-image: url(${img.src});
  position: absolute;
  width: 100%;
  height: auto;
  @media (max-width: 40rem) {
    margin: 0.25rem;
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
  width: 75%;
  margin: auto;
  margin-top: 4.688rem;
  text-align: center;
  font-family: sans-serif;

  @media (max-width: 40rem) {
    margin: 0.5rem 0.5rem;
  }
`;

export const StyledItemImage = styled(({ ...props }) => <div {...props} />)`
  float: left;
  width: 35%;

  @media (max-width: 60rem) {
    width: 80%;
    margin-left: 4rem;
  }
`;

export const StyledCardList = styled(({ ...props }) => <div {...props} />)`
  float: left;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 60%;

  @media (max-width: 60rem) {
    width: 100%;
  }
`;

export const StyledCardItemClass = styled(({ ...props }) => <div {...props} />)`
  padding: 1rem;
`;

export const StyledItemCard = styled(({ ...props }) => <div {...props} />)`
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
