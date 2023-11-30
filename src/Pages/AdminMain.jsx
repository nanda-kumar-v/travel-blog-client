import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deletePost, getAllPosts } from "../API/allApi";
import { baseUrl } from "../API/baseUrl";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import tryImage from "../Assets/Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminMain() {
  const [allPosts, setAllPosts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getAllBlogs = async () => {
    const response = await getAllPosts(searchKey);
    setAllPosts(response.data);
  };

  const handleSearch = async () => {
    const response = await getAllPosts(searchKey);
    setAllPosts(response.data);
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const response = await deletePost(id);
    toast.error(response.data);
    setTimeout(() => {}, 2000);
    getAllBlogs();
    console.log(response);
  };

  console.log(allPosts);
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      {/* admin nav */}

      <div className="adminMainPage">
        <Navbar className="bg-body-primary">
          <Container className="mt-3">
            <Navbar.Brand href="/" style={{ color: "whitesmoke" }}>
              <div className="logo">
                <img
                  alt=""
                  src={tryImage}
                  // src="https://o.remove.bg/downloads/5ace1d6b-b504-496c-bbb7-2487fa113194/290-2903647_travel-png-images-transparent-free-download-air-travel-logo-png-removebg-preview.png"
                  width="100"
                  height="60"
                  className="d-inline-block align-top"
                />{" "}
                <h4>TRAVEL DIARY</h4>
              </div>
            </Navbar.Brand>

            <div className="d-flex">
              <h2 className="text-center fw-bold pt-3">ADMIN SERVER</h2>
            </div>

            <ul className="">
              <Link
                to="/adminlogin"
                style={{
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
                className="btn btn-outline-danger fw-bold"
              >
                ADMIN - LOGOUT
              </Link>
            </ul>
          </Container>
        </Navbar>

        <div className="container mt-5">
          <div className="row">
            {/* card 1 */}

            <div className="col-5 p-3">
              <div
                className="col"
                style={{ outline: "5px white solid", marginBottom: "100px" }}
              >
                <div
                  className="card cards p-4"
                  style={{ backgroundColor: "#e74444" }}
                >
                  <div className="card-head">
                    <h2>1020</h2>
                    <span>
                      <i
                        class="fa-solid fa-users fa-flip"
                        style={{ color: "#000000" }}
                      ></i>
                    </span>
                  </div>
                  <div className="card-progress">
                    <small>Total Users Registered</small>
                    <div className="card-indicator">
                      <div
                        className="indicator one"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 */}

              <div className="col" style={{ outline: "5px white solid" }}>
                <div
                  className="card cards p-4"
                  style={{ backgroundColor: "#5043c4" }}
                >
                  <div className="card-head">
                    <h2>7400</h2>
                    <span>
                      <i
                        class="fa-brands fa-blogger-b fa-beat-fade"
                        style={{ color: "#000000" }}
                      ></i>
                    </span>
                  </div>
                  <div className="card-progress">
                    <small>Total Blogs Created</small>
                    <div className="card-indicator">
                      <div
                        className="indicator two"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1"></div>

            {/* card 3 */}

            <div className="col-5 p-3">
              <div
                className="col"
                style={{ outline: "5px white solid", marginBottom: "100px" }}
              >
                <div
                  className="card cards p-4"
                  style={{ backgroundColor: "rgba(255, 230,  0.566)" }}
                >
                  <div className="card-head">
                    <h2>$5500</h2>
                    <span>
                      <i
                        class="fa-solid fa-sack-dollar fa-bounce"
                        style={{ color: "black" }}
                      ></i>
                    </span>
                  </div>
                  <div className="card-progress">
                    <small>Monthly Revenue Growth</small>
                    <div className="card-indicator">
                      <div
                        className="indicator three"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 4 */}

              <div className="col" style={{ outline: "5px white solid" }}>
                <div
                  className="card cards p-4"
                  style={{ backgroundColor: "rgb(14, 189, 14)" }}
                >
                  <div className="card-head">
                    <h2>110</h2>
                    <span>
                      <i
                        class="fa-solid fa-trash fa-shake"
                        style={{ color: "black" }}
                      ></i>
                    </span>
                  </div>
                  <div className="card-progress">
                    <small>Total Blogs Deleted</small>
                    <div className="card-indicator">
                      <div
                        className="indicator four"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* admin all card post */}

        <section className="adminPage">
          <h2 className="text-center fw-bold mt-5">ALL USERS BLOGS</h2>

          <div className="search mt-3">
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
          </div>

          <div className="cardDesign p-3 mt-4">
            {allPosts != "" ? (
              allPosts.map((post) => (
                <div className="card1">
                  <Card style={{ width: "18rem" }}>
                    <img
                      src={`${baseUrl}/Uploads/${post.image}`}
                      style={{ height: "12rem" }}
                    />
                    <Card.Body>
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
                      <div className="text-center">
                        <Button
                          variant="danger"
                          className=""
                          onClick={(e) => handleDelete(e, post._id)}
                        >
                          Delete{" "}
                          <i
                            class="fa-solid fa-trash fa-shake"
                            style={{ color: "#00000" }}
                          ></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <h1
                style={{ height: "136px", width: "100%", color: "red" }}
                className="text-center"
              >
                Nothing To Display
              </h1>
            )}
          </div>
        </section>
      </div>

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

export default AdminMain;
