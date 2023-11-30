import React, { useState } from "react";
import Nav from "../Components/Nav";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../API/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserRegister() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    location: "",
    email: "",
    password: "",
    mobile: "",
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fName, lName, location, email, password, mobile } = userData;
    if (!fName || !lName || !location | !email || !password || !mobile) {
      toast.warning("Please Fill The Register");
    } else {
      const body = {
        fName,
        lName,
        location,
        email,
        password,
        mobile,
      };
      const response = await userRegister(body);
      if (response.status === 200) {
        toast.success(
          `${response.data.fName} has been registered successfully`
        );
        setTimeout(() => {
          navigate("/userlogin");
        }, 3000);
      } else {
        toast.error(response.response.data);
      }
    }
  };

  return (
    <>
      <section className="registerPage">
        <Nav />

        <h2 className="text-center fw-bold" style={{ fontFamily: "inherit" }}>
          USER - REGISTER
        </h2>

        <div className="container">
          <div className="col"></div>
          <div
            className="userRegister card p-5 mt-5"
            style={{ outline: "6px white solid" }}
          >
            <div className="row">
              <div className="col-5">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your First Name"
                      name="fName"
                      onChange={(e) => getUserData(e)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Last Name"
                      name="lName"
                      onChange={(e) => getUserData(e)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Location"
                      name="location"
                      onChange={(e) => getUserData(e)}
                    />
                  </Form.Group>

                  <Link to="/" className="btn btn-warning mt-2">
                    Back
                  </Link>
                </Form>
              </div>

              <div className="col-1"></div>

              <div className="col-5 ms-5">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      onChange={(e) => getUserData(e)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Passowrd</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Passowrd"
                      name="password"
                      onChange={(e) => getUserData(e)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Your Number"
                      name="mobile"
                      onChange={(e) => getUserData(e)}
                    />
                  </Form.Group>

                  <Link
                    className="btn btn-success mt-2"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Register
                  </Link>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-1"></div>
        </div>

        {/* footer */}

        <div class="footer text-center mt-4" style={{ color: "grey" }}>
          <p>
            <i
              class="fa-solid fa-plane fa-beat me-2"
              style={{ color: "#92959b" }}
            ></i>{" "}
            All rights reg & reserved © 2023 Nanda Kumar V
          </p>
        </div>
      </section>

      <ToastContainer
        position="top-center"
        style={{ color: "black" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default UserRegister;
