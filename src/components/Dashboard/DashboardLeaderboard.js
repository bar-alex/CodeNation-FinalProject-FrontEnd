import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import styled, { css } from 'styled-components';

function sort_compare(a, b) {
    return a.pace - b.pace;
}


const Container = styled.div`
    min-height: 40rem;
`;

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

const TableHeader = styled.span`
    display: block
`;

const TabItem = styled.span`
    font-size: 20px;
    margin: 10px;
    cursor: pointer;

    ${props => props.selected === props.value && css`
        text-decoration: underline;
        color: #20C6EC;
  `}
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px
`;

const DashboardLeaderboard = ({ data }) => {
    const [selected, setSelected] = useState("running");
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
        if (selected === "cycling") setFiltered(data.filter(e => e.event === "cycling"))
        else if (selected === "swimming") setFiltered(data.filter(e => e.event === "swimming"))
        else setFiltered(data.filter(e => e.event === "running"))
    }, [selected, data])

    return (
        <Container>
            <Title>My Stats</Title>
            <TabContainer>
                <TabItem selected={selected} value="running" onClick={() => setSelected("running")}>Running</TabItem>
                <TabItem selected={selected} value="cycling" onClick={() => setSelected("cycling")}>Cycling</TabItem>
                <TabItem selected={selected} value="swimming" onClick={() => setSelected("swimming")}>Swimming</TabItem>
            </TabContainer>
            <Table borderless>
                <thead>
                    <tr>
                        <th>Rank<TableHeader>#</TableHeader></th>
                        <th>Time<TableHeader>min</TableHeader></th>
                        <th>Distance<TableHeader>miles</TableHeader></th>
                        <th>Pace<TableHeader>min/miles</TableHeader></th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.sort(sort_compare).map((item, index) => (<tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.time}</td>
                        <td>{item.distance}</td>
                        <td>{item.pace}</td>
                    </tr>))
                    }

                </tbody>
            </ Table>

        </Container>
    )
};

export default DashboardLeaderboard;