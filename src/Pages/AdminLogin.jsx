import React from "react";
import Nav from "../Components/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import adminimg from "../Assets/adminlogin.png";
import Footer from "../Components/Footer";

function AdminLogin() {
  return (
    <>
      <section className="adminLogin">
        <Nav />

        <h2 className="text-center fw-bold" style={{ fontFamily: "inherit" }}>
          ADMIN - LOGIN
        </h2>

        <div className="container p-3">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
              <div
                className="adminLoginForm card"
                style={{ outline: "6px white solid" }}
              >
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Password"
                    />
                  </Form.Group>
                  <Link
                    to="/adminmain"
                    className="btn btn-success text-light mt-3"
                  >
                    Login
                  </Link>
                </Form>
              </div>
            </div>
            <div className="col-1"></div>

            <div className="col mt-2">
              <img
                alt=""
                src={adminimg}
                width="400"
                height="380"
                className="d-inline-block align-top"
              />{" "}
            </div>
          </div>
        </div>

        {/* footer */}

        <Footer />
      </section>
    </>
  );
}

export default AdminLogin;
