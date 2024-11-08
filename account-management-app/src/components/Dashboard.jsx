import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const Dashboard = () => {
  const initialUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("User info saved!");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 m-auto col-lg-10 px-4">
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <h2>{isEditing ? "Edit Your Information" : "Your Profile"}</h2>
          </div>

          <Card className="mb-3">
            <Card.Body>
              <h5 className="card-title">User Information</h5>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </Form.Group>
                <div className="mt-3">
                  {isEditing ? (
                    <Button variant="primary" onClick={handleSave}>
                      Save Changes
                    </Button>
                  ) : (
                    <Button variant="secondary" onClick={toggleEdit}>
                      Edit Information
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
