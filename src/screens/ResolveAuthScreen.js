import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    // to call this func only 1 time
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
