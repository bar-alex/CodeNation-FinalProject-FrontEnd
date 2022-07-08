import React from "react";
import styled from "styled-components";

import PlayerDetails from "./PlayerDetails";

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.0rem;
`;

const Th = styled.th`
  padding: 0 15px;
  font-size: 1.0rem;
  font-weight: 500;
  text-align: ${props => props.align || "center"};
  width: ${props => props.width || "auto"};
`;

const Td = styled.td`
  font-size: 1.0rem;
  padding: 0 15px;
  text-align: ${props => props.align || "center"};
  width: ${props => props.width || "auto"};
  color: ${props => props.color || "#333333"};
`;

const Row = styled.tr`
  border-bottom: ${props => props.bottom ? "1px solid #b4b4b4" : "none"};
  border-top: ${props => props.top ? "1px solid #b4b4b4" : "none"};
  height: ${props => props.height || "40px"};
  
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

function sort_compare(a, b) {
  return b.distance - a.distance
}

//const Leaderboard = ({ items, onClick }) => {
const Leaderboard = ( {user, setUser} ) => {

  const items = []; // this is just so it won't break

  const onClick = () => console.log('onclick triggered - so it wont break');

  const columns = [
    { name: 'overall', align: 'center', width: '70px' },
    { name: 'name', align: 'left', width: 'auto' },
    { name: 'distance', align: 'center', width: '100px' },
    { name: 'pace', align: 'center', width: '100px' },
  ];

  return (
    <Container>
      <Table>
        <TableHead>
          <Row>
            {columns.map((column, index) => (
              <Th key={index} align={column.align} width={column.width}>
                {column.name}
              </Th>
            ))}
          </Row>
        </TableHead>
        <tbody>
          {items.sort(sort_compare)
            .map((item, index) => (
              <Row top key={index} onClick={() => onClick && onClick(item, index)}>
                <Td>{index + 1}</Td>
                <Td align="left">
                  <PlayerDetails {...item} />
                </Td>
                <Td>{item.distance} km</Td>
                <Td color="#20C6EC">{item.pace} s/km</Td>
              </Row>
            ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default Leaderboard;