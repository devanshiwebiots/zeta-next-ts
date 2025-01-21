"use client";
import dynamic from "next/dynamic";
import React from "react";
const CKEditor = dynamic(() => import("@/Components/Editor/CKEditor"), {
  ssr: false,
});
const MDEEditorComponent = () => {
  return <CKEditor />;
};

export default MDEEditorComponent;
