import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { PATH } from "../constants/route.constants";

const mapStateToProps = () => ({});

const connector = connect(mapStateToProps);

interface Props extends ConnectedProps<typeof connector> {}

const PrivateRoutes: React.FC<Props> = () => {
  return localStorage.getItem("name") ? (
    <Outlet />
  ) : (
    <Navigate to={PATH.LOGIN} />
  );
};

export default connector(PrivateRoutes);
