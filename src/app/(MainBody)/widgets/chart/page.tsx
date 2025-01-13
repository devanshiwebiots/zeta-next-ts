'use client'
import dynamic from "next/dynamic";
import React from "react";

const ChartWidgets = dynamic(() => import('@/Components/Widgets/ChartWidgets'), { ssr: false });

const ChartWidgetsComponent = () => {
  return <ChartWidgets />;
};

export default ChartWidgetsComponent;
