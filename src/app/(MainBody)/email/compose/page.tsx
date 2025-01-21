'use client'
import dynamic from "next/dynamic";
import React from "react";

const Compose = dynamic(() => import("@/Components/Email/Compose"), {
  ssr: false,
});
const ComposeComponent = () => {
  return <Compose />;
};

export default ComposeComponent;
