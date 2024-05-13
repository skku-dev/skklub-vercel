'use client';

import Categories from '@/app/components/cardBoard/Categories';
import UpperBanner from '@/app/components/common/UpperBanner';
import useURLParse from '@/hooks/useURLParse';
import styled from '@emotion/styled';

const CardBoardWrapper = styled.div`
	min-height: calc(100vh - 170px);
	@media (max-width: 768px) {
		min-height: calc(100vh - 148px);
	}
`;

const MainSection = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 100px;
`;

const PaddingUnderBanner = styled.div`
	width: 100%;
	height: 80px;
	@media (max-width: 768px) {
		height: 50px;
	}
`;

export default function CardBoardLayout({ children }) {
	const { type } = useURLParse();

	return (
		<CardBoardWrapper>
			<UpperBanner />
			<MainSection>
				<Categories />
				{children}
			</MainSection>
		</CardBoardWrapper>
	);
}
