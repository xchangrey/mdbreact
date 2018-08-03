import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Fa,
  Button,
  Input
} from "mdbreact";

class ContactPage extends Component {
  render() {
    return (
      <Container>
        <section className="contact-section my-5">
          <Card>
            <Row>
              <Col lg="8">
                <CardBody className="form">
                  <h3 className="mt-4">
                    <Fa icon="envelope" className="pr-2" />Write to us:
                  </h3>
                  <Row>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input
                          type="text"
                          id="form-contact-name"
                          label="Your name"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input
                          type="text"
                          id="form-contact-email"
                          label="Your email"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input
                          type="text"
                          id="form-contact-phone"
                          label="Your phone"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="md-form mb-0">
                        <Input
                          type="text"
                          id="form-contact-company"
                          label="Your company"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className="md-form mb-0">
                        <Input
                          type="textarea"
                          id="form-contact-message"
                          label="Your message"
                        />
                        <Button tag="a" floating color="red" size="lg">
                          <Fa icon="send-o" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
              <Col lg="4">
                <CardBody className="contact red text-center h-100 white-text">
                  <h3 className="my-4 pb-2">Contact information</h3>
                  <ul className="text-lg-left list-unstyled ml-4">
                    <li>
                      <p>
                        <Fa icon="map-marker" className="pr-2" />New York, 94126
                        USA
                      </p>
                    </li>
                    <li>
                      <p>
                        <Fa icon="phone" className="pr-2" />+ 01 234 567 89
                      </p>
                    </li>
                    <li>
                      <p>
                        <Fa icon="envelope" className="pr-2" />contact@example.com
                      </p>
                    </li>
                  </ul>
                  <hr className="hr-light my-4" />
                  <ul className="list-inline text-center list-unstyled">
                    <li className="list-inline-item">
                      <a className="p-2 fa-lg w-ic">
                        <Fa icon="twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 fa-lg w-ic">
                        <Fa icon="linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="p-2 fa-lg w-ic">
                        <Fa icon="instagram" />
                      </a>
                    </li>
                  </ul>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </section>
      </Container>
    );
  }
}

export default ContactPage;
