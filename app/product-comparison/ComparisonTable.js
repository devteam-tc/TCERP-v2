import React from 'react';
import styles from './ComparisonTable.module.css';
import { comparisonData, aboutus_data } from '../utils/constants';

const ComparisonTable = () => {
    const { heading, description } = aboutus_data.productcomparison;

    return (
        <><div className={styles.tableWrapper}>
            <table className={styles.customTable}>
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
                        <tr key={feature.id} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                            <td>{index + 1}</td>
                            <td>{feature.name}</td>
                            <td>{feature.techCloudERP}</td>
                            <td className={styles.dangerText}>{feature.sapBusinessOne}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /><br />


        </div>
        <h3 className={`${styles.title} text-center pt-4 pt-md-0 mt-5`}>
                Tech Cloud ERP is an all-in-one solution with 16 fully integrated modules on a single platform!
            </h3>
            
            
            </>
    );
};

export default ComparisonTable;
