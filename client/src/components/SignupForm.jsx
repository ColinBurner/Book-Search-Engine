import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations'; // Importing Apollo mutation
import { useMutation } from '@apollo/client'; // Importing useMutation hook
import Auth from '../utils/auth';

const SignupForm = () => {
  // Set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false); // Bootstrap validation
  const [showAlert, setShowAlert] = useState(false);

  // Apollo Client mutation for sign-up
  const [addUser, { error }] = useMutation(ADD_USER);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Perform validation check using React Bootstrap
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Perform the addUser mutation and get the token
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      // Use Auth utility to log in the user after sign-up
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    // Reset form fields after submission
    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* Display alert if there's an error */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert || error} variant="danger">
          {error ? error.message : 'Something went wrong with your signup!'}
        </Alert>

        {/* Username input */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
        </Form.Group>

        {/* Email input */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
        </Form.Group>

        {/* Password input */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
        </Form.Group>

        {/* Submit button */}
        <Button disabled={!(userFormData.username && userFormData.email && userFormData.password)} type="submit" variant="success">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
