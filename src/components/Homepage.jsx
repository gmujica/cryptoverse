import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
// dta
import { useGetCryptosQuery } from '../services/criptoApi';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    console.log(data);

    if(isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title='Total 24H Volume' value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
        </>
    );
}

export default Homepage;
