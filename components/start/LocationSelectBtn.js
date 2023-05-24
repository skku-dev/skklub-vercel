import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useLocationPush from "../../hooks/useLocationPush";

const LocationBtn = styled.button`
  border: none;
  color: #434c4f;
  width: 100%;
  background-color: white;
  font-size: 1.5rem;
  height: 68px;
  border-radius: 3rem;
  font-weight: 900;

  @media (max-width: 375px) {
    width: 115px;
    font-size: 1.25rem;
    height: 40px;
    padding: 0;
    margin-bottom: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: white;
  }
`;

export default function LocationSelectBtn({
  children,
  hoverColor = "#80A4FF",
  nextLocation,
}) {
  const pushToNextLocation = useLocationPush(nextLocation);
  return (
    <LocationBtn hoverColor={hoverColor} onClick={pushToNextLocation}>
      {children}
    </LocationBtn>
  );
}

LocationSelectBtn.propTypes = {
  hoverColor: PropTypes.string,
  nextLocation: PropTypes.string,
};
