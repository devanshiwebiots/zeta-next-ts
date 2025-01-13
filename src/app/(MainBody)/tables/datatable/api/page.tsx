"use client";
import dynamic from "next/dynamic";
import React from "react";

const APITables = dynamic(() => import('@/Components/Tables/DataTable/APITables'), { ssr: false });

const ApiTablesComponent = () => {
  return <APITables />;
};

export default ApiTablesComponent;
