'use client'
import dynamic from "next/dynamic";
import React from "react";

const Default = dynamic(() => import('@/Components/Dashboard/Default'), { ssr: false });

const DefaultDashboardComponent = () => {
  return <Default />;
};

export default DefaultDashboardComponent;
