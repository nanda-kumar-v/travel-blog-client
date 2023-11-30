import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import tryImage from "../Assets/Logo.png";

function Nav() {
  return (
    <>
      <Navbar className="bg-body-primary">
        <Container className="mt-3">
          <Navbar.Brand href="/" style={{ color: "whitesmoke" }}>
            <div className="logo">
              <img
                alt=""
                src={tryImage}
                width="100"
                height="60"
                className="d-inline-block align-top"
              />
              <h4>TRAVEL DIARY</h4>
            </div>
          </Navbar.Brand>

          <ul className="d-flex justify-content-between">
            <li className="">
              <a href="/blogs">BLOGS</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>

            <Link
              to="/adminlogin"
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
              className="btn btn-outline-success fw-bold"
            >
              ADMIN - LOGIN
            </Link>
            {/* <button className="navBtn p-2"  style={{background:"green",color:'white'}}>ADMIN - LOGIN</button> */}
          </ul>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
