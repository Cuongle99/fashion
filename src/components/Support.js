import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon1 from "../assets/images/support_icon1.png";
import icon2 from "../assets/images/support_icon2.png";
import icon3 from "../assets/images/support_icon3.png";

export default function Support() {
    const initData = [
        {
            icon: icon1,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
        },
        {
            icon: icon2,
            title: "24/7 CUSTOMER SUPPORT",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: icon3,
            title: "FAST AND FREE DELIVERY",
            description: "Free delivery for all orders over $140",
        },
    ];



    return (
        <div className="support">
            <Container>
                <Row md={3}>
                    {initData.map((item, index) => {
                        return <Col key={index}>
                            <div className="support__item">
                                <img src={item.icon} alt="" />
                                <h5 className="support__title mt-4 mb-3">{item.title}</h5>
                                <p className="support__subtitle">{item.description}</p>
                            </div>
                        </Col>;
                    })}
                </Row>
            </Container>
        </div>
    );
}
