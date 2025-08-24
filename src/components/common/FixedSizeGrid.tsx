import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface FixedSizeGridProps<T> {
    items: T[];
    columns: number;
    renderItem: (item: T, index: number) => React.ReactNode;
    className?: string;
    itemClassName?: string;
    gap?: number;
}

function FixedSizeGrid<T>({ 
    items, 
    columns, 
    renderItem, 
    className = '', 
    itemClassName = '',
    gap = 3 
}: FixedSizeGridProps<T>) {
    // Calculate Bootstrap column size based on number of columns
    const getColumnSize = (totalColumns: number) => {
        const sizes = {
            1: 12,
            2: 6,
            3: 4,
            4: 3,
            6: 2,
            12: 1
        };
        return sizes[totalColumns as keyof typeof sizes] || 12;
    };

    const columnSize = getColumnSize(columns);

    return (
        <div className={className}>
            <Row className={`g-${gap}`}>
                {items.map((item, index) => (
                    <Col 
                        key={index} 
                        xs={12} 
                        sm={columnSize >= 6 ? 6 : 12}
                        md={columnSize}
                        lg={columnSize}
                        xl={columnSize}
                        className={itemClassName}
                    >
                        {renderItem(item, index)}
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default FixedSizeGrid;
