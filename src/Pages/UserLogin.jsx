import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../API/allApi";
import { userContext } from "../Components/ContextShare";
import userimg from "../Assets/adminlogin.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  const { userData, setUserData } = useContext(userContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const getLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error("Plese fill the form");
    } else {
      const body = {
        email,
        password,
      };
      const response = await userLogin(body);
      if (response.status === 200) {
        console.log(response);
        setUserData(response.data);
        localStorage.setItem("loggedUser", response.data.fName);

        toast.success(`${response.data.fName} Logged In Successfully`);
        setTimeout(() => {
          navigate("/usermain");
        }, 3000);
      } else {
        toast.error(response.response.data);
      }
    }
  };

  return (
    <>
      <section className="userLogin">
        <Nav />

        <h2 className="text-center fw-bold" style={{ fontFamily: "inherit" }}>
          USER - LOGIN
        </h2>

        <div className="container p-3">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
              <div
                className="userLoginForm card"
                style={{ outline: "6px white solid" }}
              >
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      onChange={(e) => getLoginData(e)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      onChange={(e) => getLoginData(e)}
                    />
                  </Form.Group>
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "100%" }}
                  >
                    <Link
                      className="btn btn-success"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Login
                    </Link>
                    <Link to={"/userregister"} className="mt-3">
                      <p className="btn btn-primary">New User?</p>
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-1"></div>

            <div className="col">
              <img
                alt=""
                src={userimg}
                width="400"
                height="420"
                className="mt-2"
              />{" "}
            </div>
          </div>
        </div>

        {/* footer */}

        <div class="footer text-center" style={{ color: "grey" }}>
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

export default UserLogin;
