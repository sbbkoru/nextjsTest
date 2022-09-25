// The Card to be exported goes here
import {
  StyledCardItem,
  StyledCardImage,
  StyledCardDescription,
  StyledCardHeader,
  StyledCardText,
} from "./elements";

export const Card = ({ img, width, header, text, alt, children, ...props }) => {
  return (
    <div>
      <StyledCardItem widthNum={width}>
        <StyledCardImage>
          <img src={img} alt={alt} />
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
