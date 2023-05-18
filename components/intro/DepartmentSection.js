import { Card } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useCampusDetect from "../../hooks/useCampusDetect";

const DeptTitle = styled.div`
  font-size: 2.5rem;
  color: ${(props) =>
    props.campus
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
  font-weight: 700;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const DeptWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const DeptLeftSection = styled.div`
  width: 30%;
  display: flex;
  padding-top: 15px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5px;
    padding-top: 0;
  }
`;
const DeptEmoji = styled.div`
  font-size: 1.7rem;
  line-height: 30px;
  margin-right: 30px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0 20px;
  }
`;
const DeptName = styled.div`
  font-size: 1.7rem;
  line-height: 1.7rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DeptDescription = styled(Card)`
  width: 70%;
  margin: 8px;
  padding: 21px 38px;
  font-family: pretendard;
  border-radius: 12px;
  font-size: 1.3rem;
  line-height: 2rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    padding: 20px;
    margin: 0px;
  }
`;

export function DepartmentCard({ dept }) {
  return (
    <DeptWrap>
      <DeptLeftSection>
        <DeptEmoji>{dept.emoji}</DeptEmoji>
        <DeptName>{dept.name}</DeptName>
      </DeptLeftSection>
      <DeptDescription>{dept.description}</DeptDescription>
    </DeptWrap>
  );
}

export default function DepartmentSection({ data }) {
  const { isSuwon } = useCampusDetect();

  return (
    <>
      <DeptTitle campus={!isSuwon}>부서 소개</DeptTitle>
      {data.department.map((dept) => (
        <DepartmentCard dept={dept} key={dept.name} />
      ))}
    </>
  );
}

DepartmentCard.propTypes = {
  emoji: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

DepartmentCard.defaultProps = {
  emoji: "✏️",
  name: "사무국",
  description:
    "사무국은 전체적인 동아리 활동에 필요한 상시서류를 작성하고, 신규등록 및 재등록 관련 업무를 진행합니다. 징계 및 경고 동아리를 관리하고, 동아리연합회 집행부회의, 전체동아리대표자회의 및 운영위원회의에 참석하여 회의록을 작성하고 관리합니다.",
};
