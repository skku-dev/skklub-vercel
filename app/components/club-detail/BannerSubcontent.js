import styled from '@emotion/styled';
import Link from 'next/link';
import { decode } from 'html-entities';

const BannerSubContent = styled.div`
  color: #fff;
  font-family: Pretendard-Regular;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  margin-top: 14px;

  @media (max-width: 425px) {
    font-size: 0.75rem;
    margin-top: 12px;
  }
`;

const ClubPageNaviagateBtn = styled.button`
  width: 188px;
  height: 39px;
  position: absolute;
  right: 0;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  overflow: hidden;
  color: #151717;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard-Regular;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:disabled {
    opacity: 0.3;
  }
  @media (max-width: 913px) {
    top: 0;
  }
  @media (max-width: 640px) {
    display: none;
  }
  @media (max-width: 425px) {
    position: relative;
    margin-top: 16px;
    width: 100%;
    font-size: 0.875rem;
    height: 37px;
    display: block;
  }
`;

export default function BannerSubcontent({ headLine }) {
  return (
    <>
      <BannerSubContent>
        <span>{decode(headLine)}</span>
      </BannerSubContent>
    </>
  );
}
