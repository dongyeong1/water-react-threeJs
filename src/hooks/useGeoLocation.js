import React, { useEffect, useState } from "react";

export const useGeoLocation = (option) => {
  const [location, setLocation] = useState();
  const [error, setError] = useState("");

  const success = (pos) => {
    console.log(pos);
  };

  const errorfunction = (error) => {
    console.log(error);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("위치없음");
      return;
    }
    geolocation.getCurrentPosition(success, errorfunction);
  }, []);
};

export default useGeoLocation;
