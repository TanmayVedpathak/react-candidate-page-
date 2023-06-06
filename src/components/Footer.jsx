import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../images/Header-Logo.png";
import "../App.css";

export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted footer">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol
              md="3"
              lg="4"
              xl="3"
              className="gap-col mx-auto mb-4 text-center"
            >
              <img src={logo} alt="logo" width="180px" className="mb-4" />
              <p>
                Millions of jobs. Search by what matters to you and find the one
                that's right for you.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="gap-col mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="">
                  Infrastructure
                </a>
              </p>
              <p>
                <a href="#!" className="">
                  Career Counselling
                </a>
              </p>
              <p>
                <a href="#!" className="">
                  Blog
                </a>
              </p>
              <p>
                <a href="#!" className="">
                  Events
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className=" gap-col mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Other menus</h6>
              <p>
                <a href="#!" className="">
                  Terms And Conditions
                </a>
              </p>
              <p>
                <a href="#!" className="">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="">
                  Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className=" gap-col mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">More</h6>
              <p>
                <a href="#!" className="">
                  Terms Of Use
                </a>
              </p>
              <p>
                <a href="#!" className="">
                  Awards And Events
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Follow us</h6>
              <a href="/" className="me-4 icons text-success">
                <MDBIcon fab icon="facebook-f" className="icon" />
              </a>
              <a href="." className="me-4 icons text-success">
                <MDBIcon fab icon="twitter" className="icon" />
              </a>
              <a href="/" className="me-4 icons text-success">
                <MDBIcon fab icon="instagram" className="icon" />
              </a>
              <a href="/" className="me-4 icons text-success">
                <MDBIcon fab icon="youtube" className="icon" />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
