import styled from "@emotion/styled";
import { Pagination, PaginationItem } from "@mui/material";

const PaginationWrapper = styled.div`
  width: 100%;
  height: 15px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export default function NoticeTablePagination({ page, handlePageChange }) {
  return (
    <PaginationWrapper>
      <Pagination
        count={10}
        defaultPage={1}
        page={page}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              backgroundColor: "transparent !important",
              fontSize: "1.25rem",
              lineHeight: "1.25rem",
              fontWeight: "400",
              color: item.selected ? "#50CFB1" : "rgba(255, 255, 255, 0.5)",
            }}
            {...item}
          />
        )}
      />
    </PaginationWrapper>
  );
}
