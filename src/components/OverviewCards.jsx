import React from 'react';

const OverviewCards = () => {
    return (
        <div className="overview-cards">
            <h2>Overview</h2>
            <div className="card-container">
                {/* Example card structure */}
                <div className="card">
                    <h3>Metric 1</h3>
                    <p>Value 1</p>
                </div>
                <div className="card">
                    <h3>Metric 2</h3>
                    <p>Value 2</p>
                </div>
                <div className="card">
                    <h3>Metric 3</h3>
                    <p>Value 3</p>
                </div>
            </div>
        </div>
    );
};

export default OverviewCards;