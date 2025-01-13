"use client";
import dynamic from "next/dynamic";
import React from "react";

const BasicInIt = dynamic(() => import('@/Components/Tables/DataTable/BasicInIt'), { ssr: false });
const BasicInItComponent = () => {
  return <BasicInIt />;
};

export default BasicInItComponent;
