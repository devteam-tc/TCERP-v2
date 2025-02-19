import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './ComparisonTable.module.css';
import { comparisonData, aboutus_data } from '../utils/constants';

const ComparisonTable = () => {
    const { heading, description } = aboutus_data.productcomparison;

    return (
        <>
            <div className={styles.tableWrapper}>
                {/* First Comparison Table */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Features</th>
                            <th>Tech Cloud ERP Software</th>
                            <th>Other ERP Software</th>
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

              
            </div>
        </>
    );
};

export default ComparisonTable;
