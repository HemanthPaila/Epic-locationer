import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "max",
      image: "",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
