import React from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import styles from './ComparisonTable.module.css';
import { comparisonData, aboutus_data } from '../utils/constants';

const ComparisonTable = () => {
    const { heading, description } = aboutus_data.productcomparison;

    return (
        <>
        

            <div className={styles.tableWrapper}>
                {/* First Comparison Table */}
                <Table striped bordered hover>
                    <caption>Feature Comparison: Tech Cloud ERP vs SAP Business One</caption>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Features</th>
                            <th>Tech Cloud ERP</th>
                            <th>SAP Business One</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.features.map((feature, index) => (
                            <tr key={feature.id}>
                                <td>{index + 1}</td>
                                <td>{feature.name}</td>
                                <td>{feature.techCloudERP}</td>
                                <td className={styles.dangerText}>{feature.sapBusinessOne}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <br /><br />

                {/* Second Comparison Table */}
                <Table striped bordered hover>
                    <caption>Feature Comparison: Sales and Customer Relationship Management</caption>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Features</th>
                            <th>Tech Cloud ERP</th>
                            <th>SAP Business One</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.salesAndCRMFeatures.map((feature, index) => (
                            <tr key={feature.id}>
                                <td>{index + 1}</td>
                                <td>{feature.name}</td>
                                <td>{feature.techCloudERP}</td>
                                <td className={styles.dangerText}>{feature.sapBusinessOne}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ComparisonTable;
