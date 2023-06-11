import React, { useEffect, useState } from "react";
import SuggestedFriends from "../suggestedFriend/SuggestedFriends";
import { useSelector } from "react-redux";
import useGetApi from "../../hooks/useGetApi";

function FriendList() {
  const [discoverFr, setDiscoverFr] = useState([]);
  const { id } = useSelector((state) => state.auth);

  async function getNotFriends() {
    let data = await useGetApi(`/user/notMyFriends/${id}`, {
      headers: {
        Authorization: "Berar " + localStorage.getItem("FreedomToken"),
      },
    });
    setDiscoverFr(data);
  }


  useEffect(() => {
    getNotFriends();
  }, []);

  return (
    <div>
      {discoverFr?.map((user) => (
        <SuggestedFriends
          name={
            user.firstName[0].toUpperCase() +
            user.firstName.slice(1) +
            " " +
            user.lastName[0].toUpperCase() +
            user.lastName.slice(1)
          }
          userId={user.firstName}
        />
      ))}
    </div>
  );
}

export default FriendList;
