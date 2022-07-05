import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import { Container } from "react-bootstrap";
import { Row, Col, Card, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function Datalist() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        console.log(response);
        const filterData = data.filter((li) => {
          return id !== li.id;
        });
        setData(filterData);
        toast.success("Data deleted successfully");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ToastContainer transition={Slide} autoClose={5000}></ToastContainer>
      <Row>
        {data.map((value, index) => {
          let status = value.completed;
          return (
            <Col md={4} key={index}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "5%",
                  marginLeft: "14%",
                  backgroundImage: "linear-gradient(#8BC6EC,#9599E2)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <i
                      className="fa fa-circle"
                      style={{
                        padding: "4% 0 4% 90%",
                        color: status ? "green" : "blue",
                      }}
                    ></i>
                  </Card.Title>
                  <Card.Title>{value.title}</Card.Title>
                  <hr></hr>
                  <Card.Text>{`Id: ${value.id}`}</Card.Text>
                  <Card.Text>{`Completed: ${value.completed}`}</Card.Text>
                  <Button variant="danger" onClick={() => deleteData(value.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Datalist;
