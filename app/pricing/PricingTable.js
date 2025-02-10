import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { pricingTableData } from '../utils/constants';
import styles from './PricingTable.module.css';

const PricingTable = () => {
  return (
    <div className={styles.transactionArea}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className={styles.sectionTitle}>
              <h5 className="subtitle">Pricing and</h5>
              <h3 className="title">User Allocation</h3>
            </div>
          </Col>
        </Row>

        <div className={styles.styledTableContainer}>
          <Container>
            <Table responsive hover bordered>
              <thead className="thead-dark">
                <tr>
                  <th>Tier Level</th>
                  <th>Turn Over</th>
                  <th>Modules</th>
                  <th>Users</th>
                  <th>Users Cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingTableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.tier}</td>
                    <td>{row.turnover}</td>
                    <td>{row.modules || "N/A"}</td>
                    <td>{row.users}</td>
                    <td>{row.userCost}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default PricingTable;
