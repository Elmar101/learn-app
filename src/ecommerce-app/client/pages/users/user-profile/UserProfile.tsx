import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import { XLink } from "../../../../../x-lib/x-components/x-customLink/XLink";
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
      <br/>
      {
        user.username ==="user1" && <XLink to="/admin">
          <Button>Admin</Button>
        </XLink>
      }
    </>
  );
};

export default UserProfile;
