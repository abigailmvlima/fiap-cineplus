import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 8px 0;
  background-color: #2F5E96;

`;
export const Photo = styled.img`
  display: flex;
  width: 100%;
`;

export const Image = styled.div`
  margin: 5px;
  display: flex;
  height: 250px;
  background-color: aliceblue;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.div`
  display: flex;
  font-size: 36px;
  color: aliceblue;
  margin: 10px 10px 0px 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const RowBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin-right: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Text1 = styled.div`
  display: flex;
  font-size: 23px;
  color: aliceblue;
  margin: 5px 10px 0px 10px;
  letter-spacing: 1px;
`;

export const Text2 = styled.div`
  display: flex;
  font-size: 23px;
  font-weight: bold;
  color: #F9A300;
  margin: 5px 10px 0px 10px;
  letter-spacing: 1px;
`;
