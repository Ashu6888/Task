import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="name">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="email">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group controlId="gender">
              <Form.Label className="text-white">Gender</Form.Label>
              <Form.Select
                {...register("gender", {
                  required: "Please select your gender",
                })}
                isInvalid={!!errors.gender}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.gender?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group>
              <Form.Label className="text-white">Hobbies</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Reading"
                  type="checkbox"
                  {...register("hobbies.reading")}
                  className="text-white"
                />
                <Form.Check
                  inline
                  label="Traveling"
                  type="checkbox"
                  {...register("hobbies.traveling")}
                  className="text-white"
                />
                <Form.Check
                  inline
                  label="Gaming"
                  type="checkbox"
                  {...register("hobbies.gaming")}
                  className="text-white"
                />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Button type="submit" variant="primary" className="w-100">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormComponent;
