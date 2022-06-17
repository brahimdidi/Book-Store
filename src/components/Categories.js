import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../store/categories/cateRedux';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <button className="check-status" type="button" onClick={() => handleStatus()}>Check Status </button>
  );
};

export default Categories;
