import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import { useLogoutSuccessContext, useUserStateContext } from "../../../contexts/AuthContext";

const UserProfile = () => {
  const user = useUserStateContext();
  const logout = useLogoutSuccessContext();
  const navigate = useNavigate();
  const handleLogout = () => {
      logout();
      navigate("/")
  }
  return (
    <>
      <h1>PROFILE</h1>
      <i>{JSON.stringify(user)}</i>
      <br/> <br/>
      <Button colorScheme='pink' variant='solid' onClick={handleLogout}>
          LOGOUT
      </Button>
    </>
  );
};

export default UserProfile;
