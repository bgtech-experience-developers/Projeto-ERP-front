import React from "react";
import { useTokenRefresh } from "../../../hooks/useRefreshToken";

export const Dashboard = () => {
  useTokenRefresh();
  return (
    <div>
      <h1>Dashboard!</h1>
    </div>
  );
};
