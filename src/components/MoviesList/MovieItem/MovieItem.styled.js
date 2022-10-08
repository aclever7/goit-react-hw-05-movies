import { Card } from 'antd';
import styled from 'styled-components';

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: flow;
    flex-basis: calc(100% / 3 - 32px);
    width: 213.3px;
    margin-left: 32px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: calc(100% / 4 - 16px);
    width: 228px;
    margin-left: 16px;
  }
`;

export const MovieCard = styled(Card)`
  line-height: 1.2;
  max-width: 228px;

  .ant-card-body {
    padding: 10px;
    overflow: hidden;
    flex-grow: 1;
  }

  .ant-card-meta-description {
    white-space: nowrap;
    overflow-x: hidden;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    height: 320px;
  }
  @media screen and (min-width: 1024px) {
    height: 340px;
  }
`;
