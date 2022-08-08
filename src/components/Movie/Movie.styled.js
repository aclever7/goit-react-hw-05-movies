import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.h1``;

export const MovieImg = styled.div`
  width: 30%;
  margin-right: 30px;
`;

export const Img = styled.img`
  display: inline-block;
  border: 1px solid #716f6f;
  padding: 5px;
  width: 100%;
`;

export const Aside = styled.div`
display; block;
width: 100%;
font-size: 18px;

& .ant-descriptions-item {
    padding-bottom: 8px;
};

& .ant-descriptions-item-content {
    font-size: 18px;
};

& .ant-descriptions-item-label {
    font-size: 18px;
    font-weight: 700;
}
`;

export const About = styled.div`
  font-size: 18px;
`;
