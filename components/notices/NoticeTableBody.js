import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const TableWrapper = styled.div`
  width: 100%;
  padding: 27px 44px;
  background-color: #2c2c2c;
  margin-top: 18px;
  border-radius: 12px;
  @media (max-width: 768px) {
    padding: 19px 13px;
    margin-top: 0;
  }
`;

const NoticeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 56px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`;
const NoticeRowItem = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 21px;
  }
`;

const MobileItemWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const MobileItem = styled.div`
  font-weight: 400;
  font-size: 0.75px;
  line-height: 14px;
`;

const NoticeDivider = styled.hr`
  border: 0px;
  border-top: 1px solid #737d81;
`;

const DUMMY_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function NoticeTableBody() {
  const match768 = useMediaQuery("(max-width:768px)");
  return (
    <TableWrapper>
      {DUMMY_ARRAY.map((ele, idx) => (
        <div key={idx}>
          <NoticeRow>
            {!match768 && (
              <NoticeRowItem style={{ width: "80px" }}>34</NoticeRowItem>
            )}
            <NoticeRowItem style={{ flex: 1, justifyContent: "start" }}>
              [밴드] 제 22회 못갖춘마디 정기공연 초청
            </NoticeRowItem>
            {match768 ? (
              <MobileItemWrapper>
                <MobileItem>못갖춘마디</MobileItem>
                <MobileItem>2023-04-25</MobileItem>
              </MobileItemWrapper>
            ) : (
              <>
                <NoticeRowItem style={{ width: "200px" }}>
                  못갖춘 마디
                </NoticeRowItem>
                <NoticeRowItem style={{ width: "150px" }}>
                  2023-04-25
                </NoticeRowItem>
              </>
            )}
          </NoticeRow>
          <NoticeDivider />
        </div>
      ))}
    </TableWrapper>
  );
}
