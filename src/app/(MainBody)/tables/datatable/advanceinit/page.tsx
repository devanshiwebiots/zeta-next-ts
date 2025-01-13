"use client";
import dynamic from "next/dynamic";
import React from "react";

const AdvanceInIt = dynamic(() => import('@/Components/Tables/DataTable/AdvanceInIt'), { ssr: false });

const AdvanceInItComponent = () => {
  return <AdvanceInIt />;
};

export default AdvanceInItComponent;
