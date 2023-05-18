import styled from "@emotion/styled";

const NoticeCard = styled.div`
  width: 244px;
  height: 346px;

  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imageUrl});
  border-radius: 1rem;
  box-shadow: inset 0 1em 40px rgba(0, 0, 0, 0.5),
    inset 0 -1em 40px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: 0.75rem;
  align-items: start;

  @media (max-width: 680px) {
    width: 163px;
    height: 231px;
    padding-left: 7px;
  }
`;

export default NoticeCard;
