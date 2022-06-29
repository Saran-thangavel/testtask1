import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col, Card, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function Datalist() {
  const [data, setData] = useState([]);
  const params = useParams();

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
      .delete(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      .then(() => {
        const filterData = data.filter((li) => {
          return id !== li.id;
        });
        setData(filterData);
        toast.success("Data deleted successfully");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ToastContainer transition={Slide} autoClose={5000}></ToastContainer>
      <Row>
        {data.map((value) => {
          return (
            <Col md={4}>
              <Card
                style={{
                  width: "18rem",
                  marginTop: "5%",
                  backgroundColor: "burlywood",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
              >
                <Card.Body>
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
