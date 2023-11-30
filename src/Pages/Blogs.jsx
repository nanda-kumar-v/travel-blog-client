import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { getAllPosts } from "../API/allApi";
import { baseUrl } from "../API/baseUrl";
import tryImage from "../Assets/Logo.png";

function Blogs() {
  const [searchKey, setSearchKey] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const getAllBlogs = async () => {
    const response = await getAllPosts(searchKey);
    setAllPosts(response.data);
  };

  const handleSearch = async () => {
    const response = await getAllPosts(searchKey);
    setAllPosts(response.data);
  };

  console.log(searchKey);

  console.log(allPosts);
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <main className="blogPage">
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
                />{" "}
                <h4>TRAVEL DIARY</h4>
              </div>
            </Navbar.Brand>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search By Location"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Form>

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
            </ul>
          </Container>
        </Navbar>

        {/* basic card design 1 */}

        <div className="cardDesign p-3 mt-4">
          {allPosts != "" ? (
            allPosts.map((post) => (
              <div className="card1">
                <Card style={{ width: "18rem" }}>
                  <div className="cardImgDiv">
                    <img
                      src={`${baseUrl}/Uploads/${post.image}`}
                      className="cardImg"
                    />
                  </div>
                  <Card.Body>
                    <div className="cardDesc">
                      <Card.Title
                        className="text-center"
                        style={{
                          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        {post.location}
                      </Card.Title>

                      <Card.Text>{post.description}</Card.Text>

                      <div className="text-uppercase text-center fw-bolder">
                        <p>POSTED BY : {post.Uname}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <h1 className="text-center" style={{ color: "red" }}>
              Nothing To Display
            </h1>
          )}
        </div>

        {/* footer */}

        <div class="footer text-center pb-1" style={{ color: "grey" }}>
          <p>
            <i
              class="fa-solid fa-plane fa-beat me-2"
              style={{ color: "#92959b" }}
            ></i>{" "}
            All rights reg & reserved © 2023 Nanda Kumar V
          </p>
        </div>
      </main>
    </>
  );
}

export default Blogs;
