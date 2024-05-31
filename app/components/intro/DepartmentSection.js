import { Card, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import useURLParse from "@/hooks/useURLParse";

const DeptTitle = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 32px;
  margin-top: 60px;
  font-family: GmarketSansBold;
  word-break: keep-all;
  > span {
    color: ${(props) => (props.campus ? "#00B590" : "#80A4FF")};
  }
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 15px;
    margin-left: 15px;
    font-size: 24px;
  }
`;

const DeptWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const DeptLeftSection = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    padding-top: 15px;
  }
`;

const DeptEmoji = styled.div`
  font-size: 24px;
  line-height: 32px;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const DeptName = styled.div`
  width: 100px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  word-break: keep-all;
  font-family: GmarketSansBold;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DeptDescription = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: 75%;
  margin: 8px;
  padding: 21px 38px;
  font-family: Pretendard-Regular;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  word-break: keep-all;
  justify-self: flex-end;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
    padding: 20px 16px;
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
  const { isSuwon } = useURLParse();
  const match480 = useMediaQuery("(max-width:480px)");
  return (
    <>
      <DeptTitle campus={!isSuwon}>
        <span>{data.name}</span>은 {match480 && <br />} 이렇게 구성되어 있어요
      </DeptTitle>

      {data.department.map((dept) => (
        <DepartmentCard dept={dept} key={dept.name} />
      ))}
    </>
  );
}
