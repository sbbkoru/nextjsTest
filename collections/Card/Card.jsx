// The Card to be exported goes here
import {
  StyledCardItem,
  StyledCardImage,
  StyledCardDescription,
  StyledCardHeader,
  StyledCardText,
} from "./elements";

export const Card = ({ img, width, header, text, children, ...props }) => {
  return (
    <div>
      <StyledCardItem widthNum={width}>
        <StyledCardImage>
          <img src={img} />
        </StyledCardImage>
        <StyledCardDescription>
          <StyledCardHeader>
            <div className="header">{header}</div>
          </StyledCardHeader>
          <StyledCardText>{children}</StyledCardText>
        </StyledCardDescription>
      </StyledCardItem>
    </div>
  );
};
