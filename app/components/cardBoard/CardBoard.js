'use client';

import { categoryState } from '@/utils/atoms';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import ClubCard from './ClubCard';
import useClubLike from '@/hooks/useClubLike';
import {
	CAROUSEL_COMMENT_SEOUL,
	CAROUSEL_COMMENT_SUWON,
} from '@/utils/constants';
import useURLParse from '@/hooks/useURLParse';

const BoardWrapper = styled.div`
	max-width: 990px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	row-gap: 30px;
	column-gap: 30px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 819px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 425px) {
		gap: 16px;
	}
`;

const CategoryCardTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	color: white;
	padding: 1rem;
	margin: 0;
`;

const CategoryCardDescription = styled.p`
	font-size: 1rem;
	font-weight: 400;
	color: white;
	padding: 1rem;
	margin: 0;
	word-break: keep-all;
`;

export default function CardBoard({ cardsData }) {
	const category = useRecoilValue(categoryState);
	const [likedClubs, _] = useClubLike();
	const { isSuwon } = useURLParse();

	const CategoryCard = styled.div`
		grid-column: span 2;
		background-color: ${isSuwon ? 'rgb(128, 164, 255)' : 'rgb(80, 207, 177)'};
		border-radius: 1rem;
	`;

	const filteredClubs = (category) => {
		if (
			category === '전체보기' ||
			category === '나에게는\n어떤 동아리가\n어울릴까'
		) {
			return cardsData;
		} else if (category === '하트') {
			return cardsData.filter((card) => likedClubs.includes(card.name));
		} else {
			return cardsData.filter((card) => card.belongs === category);
		}
	};

	return (
		<BoardWrapper>
			<CardGrid>
				{category === '전체보기' ? (
					<></>
				) : (
					<CategoryCard>
						<CategoryCardTitle>{category}</CategoryCardTitle>
						<CategoryCardDescription>
							{
								(isSuwon
									? CAROUSEL_COMMENT_SUWON
									: CAROUSEL_COMMENT_SEOUL
								).find((comment) => comment.name === category)?.content
							}
						</CategoryCardDescription>
					</CategoryCard>
				)}
				{filteredClubs(category).map((club) => (
					<ClubCard key={club.id} club={club} />
				))}
			</CardGrid>
		</BoardWrapper>
	);
}
