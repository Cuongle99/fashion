import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function ProtectAdmin(props) {
  const token = useSelector((state) => state.userReducer.token);
  return token != null ? (
    props.children
  ) : (
    <Navigate to={'/signin'} replace={true} />
  );
}
