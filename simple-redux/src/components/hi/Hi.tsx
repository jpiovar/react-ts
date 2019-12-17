import React from "react";
import { useSelector } from "react-redux";
import './Hi.scss';

export const Hi = (props: any) => {
  const {count, text} = useSelector((state: any) => state);

  return (
    <main className="hi">
      <div className="title">Count: {count}, Action: {text}</div>
    </main>
  );
};