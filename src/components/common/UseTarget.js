import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Target() {
  const { offer, jsonLoading } = useSelector((state) => state);
  const { id } = useParams();

  console.log(offer);

  const target = offer.find((el) => el.id === id);

  return target;
}

export default Target;
