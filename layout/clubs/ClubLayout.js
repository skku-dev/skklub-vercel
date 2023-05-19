import styled from "@emotion/styled";
import Categories from "../../components/common/Categories";
import UpperBanner from "../../components/common/UpperBanner";
import CardBoard from "../../components/common/CardBoard";

const MainSection = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 200px;
`;

export default function ClubLayout() {
  return (
    <>
      <UpperBanner />
      <MainSection>
        <Categories />
        <CardBoard />
      </MainSection>
    </>
  );
}
