"use client";
import dynamic from "next/dynamic";
import React from "react";

const DataSources = dynamic(() => import('@/Components/Tables/DataTable/DataSources'), { ssr: false });
const DataSourcesComponent = () => {
  return <DataSources />;
};

export default DataSourcesComponent;
