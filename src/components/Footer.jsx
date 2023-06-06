import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../images/Header-Logo.png";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                <img src={logo} alt="logo" width="180px" />
              </h6>
              <p>
                Millions of jobs. Search by what matters to you and find the one
                that's right for you.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Other menus</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">More</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <a href="/" className="me-4 text-success">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="." className="me-4 text-success">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="/" className="me-4 text-success">
                <MDBIcon fab icon="google" />
              </a>
              <a href="/" className="me-4 text-success">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="/" className="me-4 text-success">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="/" className="me-4 text-success">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
