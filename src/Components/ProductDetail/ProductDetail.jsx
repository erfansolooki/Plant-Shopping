import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";

const ProductDetail = () => {
  const [flower, setFlower] = useState(null);

  const product = useParams().id;
  const productShow = () => {
    const show = products.filter((item) => item.id == product);
    setFlower(show);
    console.log(show);
  };
  useEffect(() => {
    productShow();
  }, []);

  // console.log(flower);

  return <></>;
};

export default ProductDetail;
