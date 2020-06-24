
//Done with antd

import { Card, Col, Row } from 'antd';
import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import { Typography } from 'antd';
import cx from 'classnames';
import Paragraph from 'antd/lib/skeleton/Paragraph';
const { Title} = Typography;


const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loading....';
    }
return (

      <div>
        <Row justify='center' className={styles.container}>
          <Col>
            <Card className={cx (styles.card, styles.infected)}>
            <Title level={1} >Infected</Title>
             <CountUp  start={0} end={confirmed.value} duration={2.5} separator=","/> 
             <p>{new Date(lastUpdate).toDateString()}</p>
             <p>Number of active cases of covid19</p>
            </Card>
          </Col>
          <Col>
            <Card className={cx (styles.card, styles.recovered)}>
            <Title level={1} >Recovered</Title>
            <CountUp  start={0} end={recovered.value} duration={2.5} separator=","/>
            <p>{new Date(lastUpdate).toDateString()}</p>
            <p>Number of recoveries from covid19</p>
            </Card>
          </Col>
          <Col>
            <Card className={cx (styles.card, styles.deaths)}>
            <Title level={1} >Deaths</Title>
            <CountUp  start={0} end={deaths.value} duration={2.5} separator=","/> 
            <p>{new Date(lastUpdate).toDateString()}</p>
            <p>Number of deaths caused by covid19</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
}

export default Cards;