'use client'
import dynamic from "next/dynamic";
import React from "react";

const ECommerce = dynamic(() => import('@/Components/Dashboard/ECommerce'), { ssr: false });

const ECommerceComponent = () => {
  return <ECommerce />;
};

export default ECommerceComponent;
