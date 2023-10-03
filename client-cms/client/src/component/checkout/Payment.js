// pages/payment.js
import { Container, Row, Col, Input, Button, Spacer } from "@nextui-org/react";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import { useState } from "react";

export default function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const validateField = (fieldName) => {
    const value = formData[fieldName];
    const newErrors = { ...errors };

    // Regular expressions for validation
    const cardNumberPattern = /^\d{16}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    switch (fieldName) {
      case "name":
        if (value.trim() === "") {
          newErrors.name = "Name required";
        } else {
          newErrors.name = "";
        }
        break;
      case "cardNumber":
        if (!cardNumberPattern.test(value)) {
          newErrors.cardNumber = "Invalid card";
        } else {
          newErrors.cardNumber = "";
        }
        break;
      case "expiry":
        if (!expiryPattern.test(value)) {
          newErrors.expiry = "Invalid Date";
        } else {
          newErrors.expiry = "";
        }
        break;
      case "cvv":
        if (!cvvPattern.test(value)) {
          newErrors.cvv = "Invalid CVV";
        } else {
          newErrors.cvv = "";
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Row justify="center" align="center" style={{ height: "70vh" }}>
        <Col span={12}>
          <h2>💰💰 Payment 💰💰</h2>
          <Spacer y={2} />
          <form>
            <Input
              label="Name"
              name="name"
              placeholder="John Doe"
              onChange={handleInputChange}
              onBlur={() => validateField("name")} // Validate on focus change
            />
            <span style={{ color: "red" }}>{errors.name}</span>
            <Spacer y={1} />
            <Input
              label="Card Number"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              onChange={handleInputChange}
              onBlur={() => validateField("cardNumber")} // Validate on focus change
            />
            <span style={{ color: "red" }}>{errors.cardNumber}</span>
            <Spacer y={1} />
            <Input
              label="Expiry Date"
              name="expiry"
              placeholder="MM/YY"
              onChange={handleInputChange}
              onBlur={() => validateField("expiry")} // Validate on focus change
            />

            <span style={{ color: "red" }}>{errors.expiry}</span>
            <Spacer y={1} />
            <Input
              label="CVV"
              name="cvv"
              placeholder="123"
              onChange={handleInputChange}
              onBlur={() => validateField("cvv")} // Validate on focus change
            />
            <span style={{ color: "red" }}>{errors.cvv}</span>
            <Spacer y={1} />
            <MDBTypography tag="h1" className="mb-3 ">
              <MDBIcon fab icon="cc-visa" className="me-1 fa-lg" />
              <MDBIcon fab icon="cc-mastercard" className="me-1 fa-lg" />
              <MDBIcon fab icon="cc-amex" className="me-1 fa-lg" />
              <MDBIcon fab icon="cc-paypal" className="me-1 fa-lg" />
              <MDBIcon fab icon="cc-discover" className="me-1 fa-lg" />
            </MDBTypography>
            <Button auto type="submit">
              Pay Now
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
