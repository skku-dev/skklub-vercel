import useURLParse from '@/hooks/useURLParse';
import { categoryState } from '@/utils/atoms';
import { CATEGORIES_SEOUL, CATEGORIES_SUWON } from '@/utils/constants';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from 'react';

const CategoryWrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	margin-bottom: 25px;
	margin-top: 32px;
	overflow-x: scroll;
	gap: 20px;

	::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 976px) {
		justify-content: flex-start;
	}
`;

const Category = styled.button`
	width: 102px;
	height: 39px;
	padding: 10px 21px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 99px;
	background-color: ${(props) =>
		props.isClicked
			? props.theme.palette.text.primary
			: props.theme.palette.background.paper};
	color: ${(props) =>
		props.isClicked
			? props.theme.palette.background.paper
			: props.theme.palette.text.primary};
	text-align: center;
	text-overflow: ellipsis;
	font-family: Pretendard-Regular;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	white-space: nowrap;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.palette.text.primary};
		color: ${(props) => props.theme.palette.background.paper};
	}

	@media (max-width: 425px) {
		width: 94px;
		height: 37px;
		padding: 10px 21px;
		text-align: center;
		text-overflow: ellipsis;
		font-family: Pretendard-Regular;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
`;

const CategoryComment = styled.div`
	line-height: 1.5rem;
	margin-top: 16px;
	background-color: #80a4ff;
	width: 80%;
	margin: 20px auto;
	padding: 30px;
	border-radius: 10px;
`;

const CommentTitle = styled.h1`
	font-family: Pretendard-Regular;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.25rem;
	color: rgb(255, 225, 149);
`;

const CategoryCommentContent = styled.p`
	font-family: Pretendard-Regular;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem;
	color: #ffffff;
`;

export default function Categories() {
	const [category, setCategory] = useRecoilState(categoryState);
	const { isSuwon } = useURLParse();
	const onCategoryClick = (clickedCategory) => {
		setCategory(clickedCategory);
	};

	return (
		<div>
			<CategoryWrapper>
				{(isSuwon ? CATEGORIES_SUWON : CATEGORIES_SEOUL).map((c) => (
					<Category
						key={c}
						isClicked={category === c}
						onClick={() => onCategoryClick(c)}
					>
						{c}
					</Category>
				))}
				<Category
					isClicked={category === '하트'}
					onClick={() => onCategoryClick('하트')}
					style={{
						width: 'auto',
						height: 'auto',
						padding: ' 8px 21px',
					}}
				>
					<FavoriteIcon />
				</Category>
			</CategoryWrapper>
			{/* <CategoryComment>
				<CommentTitle>분과소개</CommentTitle>
				<CategoryCommentContent>
					서울과 수원의 동아리들을 분과별로 소개합니다. 원하는 분과를 클릭하여
					동아리를 확인해보세요!
				</CategoryCommentContent>
			</CategoryComment> */}
		</div>
	);
}
