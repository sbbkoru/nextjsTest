import styled from "styled-components";

// Styled elements for the Card go here

export const StyledCardItem = styled(({ widthNum = "50%", ...props }) => (
  <div style={{ width: widthNum }} {...props} />
))`
  float: left;
  font-family: Poppins;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  margin-left: 4rem;
  border-radius: 0.313rem;
  height: auto;
  background-color: #f9f9f9;

  &:hover {
    border: 0.125rem solid #0099ff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  &:hover .header {
    text-decoration-line: underline;
    color: #0099ff;
  }
`;

export const StyledCardImage = styled(({ ...props }) => <div {...props} />)`
  float: left;
  padding: 1.5rem;

  @media (max-width: 75rem) {
    width: 15%;
  }
`;

export const StyledCardDescription = styled(({ ...props }) => (
  <div {...props} />
))`
  float: left;
  width: 65%;
  text-align: left;
  padding: 0.75rem;
`;

export const StyledCardHeader = styled(({ ...props }) => <h4 {...props} />)`
  text-align: left;
  font-weight: bold;
  font-size: 1.125rem;
  padding-top: 1.563rem;
  margin: 0.063rem;

  @media (max-width: 40rem) {
    padding-top: 0.3rem;
  }
`;

export const StyledCardText = styled(({ ...props }) => <p {...props} />)`
  text-align: left;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.125rem;

  @media (max-width: 75rem) {
    font-size: 0.875rem;
  }

  @media (max-width: 40rem) {
    font-size: 0.75rem;
  }
`;
