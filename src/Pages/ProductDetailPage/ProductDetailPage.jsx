import React from "react";
import ProductDetailComponent from "../../Components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <div
      style={{ padding: "0 120px", background: "#efefef", height: "1000px" }}
    >
      <h5>Trang chủ</h5>
      <div>
        <ProductDetailComponent />
      </div>
    </div>
  );
};

export default ProductDetailPage;
