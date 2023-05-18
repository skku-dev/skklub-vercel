import styled from "@emotion/styled";

const Hashtag = styled.div`
  padding: 3px 15px;
  height: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303030;
  border-radius: 100px;
  font-weight: 600;

  @media (max-width: 768px) {
    height: unset;
    padding: 1px 5px;
    font-size: 14px;
    border: 1px solid white;
    line-height: 151.5%;
  }
`;

export default Hashtag;
