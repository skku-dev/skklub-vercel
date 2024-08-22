import styled from '@emotion/styled';
import NoticeDate from './NoticeDate';
import NoticeTitle from './NoticeTitle';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

const CardWrapper = styled.div`
	width: 174px;
	cursor: pointer;

	@media (max-width: 425px) {
		width: 164px;
	}
	@media (max-width: 375px) {
		width: 140px;
	}
`;
const NoticeImg = styled(Image)`
	border-radius: 10px;
`;

const NoticeThumbnail = styled.div`
	display: -webkit-box;
	word-wrap: break-word;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	font-family: Pretendard-Regular;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 140%; /* 19.6px */
	letter-spacing: -0.14px;
	color: ${({ theme }) => theme.palette.text.secondary};

	@media (max-width: 425px) {
		whitespace: nowrap;
		font-size: 12px;
		letter-spacing: -0.12px;
	}
`;

export default function NoticeCard({ item }) {
	const matches_425 = useMediaQuery('(max-width:425px)');
	const matches_375 = useMediaQuery('(max-width:375px)');
	const router = useRouter();
	const pathname = usePathname();

	const pushToNotice = (id) => {
		if (pathname.includes('seoul')) {
			router.push(`/seoul/notices/${id}`);
		} else {
			router.push(`/suwon/notices/${id}`);
		}
	};
	return (
		<CardWrapper
			onClick={() => pushToNotice(item.noticeId)}
			key={item.noticeId}
		>
			<NoticeImg
				src={item.thumbnail.url}
				width={matches_425 ? (matches_375 ? 140 : 164) : 174}
				height={matches_425 ? (matches_375 ? 140 : 164) : 174}
				alt="notice thumbnail"
			/>
			<NoticeDate>{item.createdAt.substr(0, 10)}</NoticeDate>
			<NoticeTitle>{item.title}</NoticeTitle>
			<NoticeThumbnail>{item.content}</NoticeThumbnail>
		</CardWrapper>
	);
}
