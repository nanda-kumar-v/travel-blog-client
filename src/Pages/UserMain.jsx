import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import { userContext } from "../Components/ContextShare";
import { addPost } from "../API/allApi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserMain() {
  const { userData, setUserData } = useContext(userContext);
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  const [postData, setPostData] = useState({
    Uname: "",
    location: "",
    description: "",
  });

  console.log(image);
  console.log(postData);

  const getPostData = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { Uname, location, description } = postData;
    if (!image || !Uname || !location || !description) {
      toast.warning("Please fill the form");
    } else {
      const data = new FormData();
      data.append("image", image);
      data.append("Uname", Uname);
      data.append("location", location);
      data.append("description", description);
      const headers = {
        "content-type": "multipart/form-data",
      };

      const result = await addPost(data, headers);
      console.log(result.data);
      if (result.status === 200) {
        toast.success(`${result.data.Uname} Added Blog`);
        setTimeout(() => {
          navigate("/blogs");
        }, 3000);
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/userlogin");
  };

  return (
    <>
      <div className="userMainPage">
        <div className="row">
          <div className="col-2 text-center mt-5">
            <h2 className="mt-2">Travel Diary</h2>
          </div>

          <div className="col-7 userMain ps-5 mt-4">
            <div
              className="userForm card p-4 mt-2"
              style={{ outline: "3px white solid" }}
            >
              <div className="image w-100 text-center">
                <img
                  style={{ width: "300px", height: "120px" }}
                  src={
                    preview
                      ? preview
                      : "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  }
                  alt=""
                />
                <p className="text-center mt-3">
                  👋 ADD YOUR HIGHLIGHTS FROM YOUR TRAVEL JOURNEYS 👋
                </p>
              </div>
              <Form>
                <div className="row">
                  <div className="col">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Location Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Location"
                        name="location"
                        onChange={(e) => getPostData(e)}
                      />
                    </Form.Group>
                  </div>

                  <div className="col">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        name="Uname"
                        onChange={(e) => getPostData(e)}
                      />
                    </Form.Group>
                  </div>
                </div>

                <Form.Group className="mb-3">
                  <Form.Label>Upload Location Photo </Form.Label>
                  <FormControl
                    type="file"
                    name="user_profile"
                    onChange={(e) => setImage(e.target.files[0])}
                  ></FormControl>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    Main Highlighting Notes About Your Trip
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    onChange={(e) => getPostData(e)}
                  />
                </Form.Group>

                <div className="userbtn d-flex">
                  <Button variant="warning" onClick={(e) => handleCancel(e)}>
                    Cancel
                  </Button>{" "}
                  <Button variant="success" onClick={(e) => handleAdd(e)}>
                    Add
                  </Button>{" "}
                </div>
              </Form>
            </div>
          </div>

          <div className="col-3 text-center mt-5 ">
            <h3 className="mt-2">Hey, {userData.fName}</h3>
            <Link
              to="/"
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
              className="btn btn-outline-danger mt-3 fw-bold"
            >
              LOGOUT
            </Link>
            {/* <Button  className="mt-3" variant="danger">
              Logout
            </Button> */}
          </div>
        </div>
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

export default UserMain;
