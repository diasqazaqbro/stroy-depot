"use client";
import { ReactNode, useEffect, useState } from "react";
import "./Button.scss";
import axios from "axios";
import { BASE_URL } from "@/shared/api/apiBase";

interface IButton {
  label?: string;
  className?: string;
  onClick?: (event: any) => void;
  children?: ReactNode;
  disabled?: boolean;
  isPhone?: boolean;
}

export default function Button(props: IButton) {
  const [number, setNumber] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/settings`);
        setNumber(response.data);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  // console.log();
  const { label, className, onClick, children, disabled, isPhone } = props;

  return (
    <>
      {!isPhone ? (
        <button onClick={onClick} className={className} disabled={disabled}>
          {label}
          {children}
        </button>
      ) : (
        <button onClick={onClick} className={className} disabled={disabled}>
          
<a href={`tel:${number[0].phoneNumber}`}>{label}</a>          
        </button>
      )}
    </>
  );
}
