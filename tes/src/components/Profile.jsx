import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user Data:", error);
        }
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No user data found!</p>;
  }

  return (
    <div className="flex items-center space-x-4 p-4">
      <img
        src={userData.profilePicture || "https://via.placeholder.com/40"}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      {/* Display username */}
      <div>
        <h2 className="text-lg font-medium">
          {userData?.fullname || "Anonymous User"}
        </h2>
      </div>
    </div>
  );
}
