import styled from '@emotion/styled';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const MoreBtn = styled.button`
	background-color: #f0f0f0;
	color: #303030;
	font-weight: 600;
	border: none;
	width: 72px;
	height: 39px;
	font-size: 16px;
	border-radius: 99px;
	cursor: pointer;

	@media (max-width: 680px) {
		width: 73px;
		height: 25px;
		font-size: 0.75rem;
		border-radius: 40px;
		position: absolute;
		top: 0;
		right: 0;
	}
`;

export default function NoticesRouterBtn() {
	const router = useRouter();
	const pathname = usePathname();

	const pushToNotices = () => {
		if (pathname.includes('seoul')) {
			router.push(`/seoul/notices`);
		} else {
			router.push(`/suwon/notices`);
		}
	};
	return <MoreBtn onClick={pushToNotices}>더보기</MoreBtn>;
}
