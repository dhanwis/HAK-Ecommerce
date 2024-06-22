import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

export default function EditProfile() {
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    street: "",
    city: "",
    state: "",
    pincode: ""
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile data from the backend
    axios.get("/api/profile/")
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        toast.error("Failed to load profile data");
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdating(true);
    // Update profile data
    axios.put("/api/profile/", profile)
      .then(response => {
        toast.success("Profile updated successfully");
        setUpdating(false);
        navigate("/");
      })
      .catch(error => {
        toast.error("Failed to update profile");
        setUpdating(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            value={profile.first_name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            type="text"
            name="last_name"
            id="last_name"
            value={profile.last_name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            type="text"
            name="street"
            id="street"
            value={profile.street}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            value={profile.city}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            id="state"
            value={profile.state}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="pincode">Pincode</Label>
          <Input
            type="text"
            name="pincode"
            id="pincode"
            value={profile.pincode}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <Button type="submit" color="primary" disabled={updating}>
          {updating ? "Updating..." : "Update Profile"}
        </Button>
      </Form>
    </Container>
  );
}
