import React from 'react'
// import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';
import profilePhoto from "../../assets/profile.jpg";
import { Container, Row, Col } from 'react-bootstrap';
// import LineChart from "../LineChart";
import DashboardRoutes from './DashboardRoutes';
import DashboardChallenges from './DashboardChallenges';
import DashboardLeaderboard from './DashboardLeaderboard';
import dashboardLeaderboardData from './DashboardLeaderboardData';
import DashboardAchievements from './DashboardAchievements';
import DashboardLineChart from "./DashboardLineChart";
import dashboardChartData from './DashboardChartData';
import runningImage from "../../assets/running.jpg";
import cyclingImage from "../../assets/cycling.jpg";
import swimmingImage from "../../assets/swimming.jpg";


const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px;
`;

const ImageContainer = styled(Container)`
    margin-top: 30px;
`;

const LineChartContainerRow = styled(Row)`
        width: 80%;
        padding-left: 20px;
        display: flex;
        justify-content: center;
`;

const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`;

const ProfileImageContainer = styled(Container)`
        justify-content: "center"; 
        display: "flex"; 
        margin-top: 30px;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
`;


const Dashboard = ( {user, setUser} ) => {
    return (
        <div>
            <ImageContainer fluid>
                <Row>
                    <Col md={4}>
                        <Image src={runningImage} />
                    </Col>
                    <Col md={4}>
                        <Image src={cyclingImage} />
                    </Col>
                    <Col md={4}>
                        <Image src={swimmingImage} />
                    </Col>
                </Row>
            </ImageContainer>
            <ProfileImageContainer fluid>
                <Row>
                    <Col>
                        <ProfileImage src={profilePhoto} />
                    </Col>
                </Row>
            </ProfileImageContainer>
            <Container fluid>
                <Row>
                    <Col md={8}>
                        <LineChartContainerRow>
                            <Title>Activities</Title>
                            <DashboardLineChart
                                datasets={dashboardChartData.data}
                                labels={dashboardChartData.labels}
                            />
                        </LineChartContainerRow>
                        <Row>
                            <DashboardRoutes />
                        </Row>
                        <Row>
                            <DashboardChallenges />
                        </Row>
                    </Col>
                    <Col md={4}>
                        <DashboardLeaderboard
                            data={dashboardLeaderboardData}
                        />
                        <DashboardAchievements />

                    </Col>
                </Row>
            </Container>


        </div>
    )
};

export default Dashboard;