import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageGrid({ items }) {
    const columnSize = 4; // Since you want 3 items per row in a 12-column grid

    // Group items into rows
    const rows = [];
    let currentRowItems = [];
    for (let i = 0; i < items.length; i++) {
        currentRowItems.push(
            <Col key={i} sm={columnSize}>
                {items[i]}
            </Col>
        );

        // If we have three items in the current row or it's the last item, push the row and reset currentRowItems
        if (currentRowItems.length === 3 || i === items.length - 1) {
            rows.push(
                <Row key={i}>
                    {currentRowItems}
                </Row>
            );
            currentRowItems = [];
        }
    }

    return (
        <Container>
            {rows}
        </Container>
    );
}

export default ImageGrid;
