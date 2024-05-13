import useURLParse from '@/hooks/useURLParse';
import { INTRO_SEOUL, INTRO_SUWON } from '@/utils/constants';
import styled from '@emotion/styled';

const BannerWrapper = styled.div`
  width: 100vw;
  height: 236px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    ${(props) =>
      props.isSuwon
        ? `url("/assets/images/banner_suwon.jpg")`
        : `url("/assets/images/banner_seoul.jpg")`};
  background-position: ${(props) => (props.isSuwon ? 'center' : '50% 60%')};
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SubTitle = styled.div`
  text-align: center;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: #fff;
  font-family: GmarketSansBold;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function UpperBanner() {
  const { isSuwon, type } = useURLParse();

  const convertEngTypeToKo = (type) => {
    if (type === 'central-clubs') {
      return '중앙동아리';
    } else if (type === 'semi-central-clubs') {
      return '준중앙동아리';
    } else {
      return isSuwon ? `${INTRO_SUWON.name}` : `${INTRO_SEOUL.name}`;
    }
  };

  return (
    <BannerWrapper isSuwon={isSuwon}>
      <div>
        <SubTitle>{isSuwon ? '율전' : '명륜'} 캠퍼스</SubTitle>
        <Title>{convertEngTypeToKo(type)}</Title>
      </div>
    </BannerWrapper>
  );
}
