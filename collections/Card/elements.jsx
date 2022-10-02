import styled from "styled-components";

// Styled elements for the Card go here

export const StyledCardItem = styled(({ widthNum = "50%", ...props }) => (
  <div style={{ width: widthNum }} {...props} />
))`
  float: left;
  font-family: Poppins;
  line-height: 1.2;
  height: 190px;
  margin-bottom: 1.25rem;
  align-items: center;
  display: flex;

  @media (max-width: 80rem) {
    height: 120px;
  }

  @media (max-width: 70rem) {
    height: 100px;
  }

  border-radius: 0.313rem;
  background-color: #f9f9f9;
  border: 0.125rem solid transparent;

  &:hover {
    border: 0.125rem solid #0099ff;
  }
  &:hover .header {
    text-decoration-line: underline;
    color: #0099ff;
  }
`;

export const StyledCardImage = styled(({ ...props }) => <div {...props} />)`
  float: left;
  padding: 2rem;

  @media (max-width: 60rem) {
    display: inline;
    width: 10%;
    margin: auto;
  }

  @media (max-width: 40rem) {
    flex: 5%;
    width: 20%;
  }
`;

export const StyledCardDescription = styled(({ ...props }) => (
  <div {...props} />
))`
  float: left;
  flex: 50%;
  text-align: left;
  padding: 0.75rem;
`;

export const StyledCardHeader = styled(({ ...props }) => <h4 {...props} />)`
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;

  margin: 0.063rem;

  @media (max-width: 60rem) {
    font-size: 1rem;
  }
`;

export const StyledCardText = styled(({ ...props }) => <p {...props} />)`
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0.125rem;

  @media (max-width: 75rem) {
    font-size: 0.8rem;
  }

  @media (max-width: 70rem) {
    font-size: 0.7rem;
  }
  @media (max-width: 40rem) {
    font-size: 0.6rem;
  }
  @media (max-width: 30rem) {
    font-size: 0.5rem;
  }
  @media (max-width: 20rem) {
    font-size: 0.4rem;
  }
`;
