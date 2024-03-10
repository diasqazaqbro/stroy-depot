"use client"
import { useState } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as yup from "yup";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import './Form.scss';
import axios from 'axios';

export type FormData = {
  name: string;
  phoneNumber: string;
  interest: string;
}

export type FormProps = {
  onSubmit?: (data: FormData) => void;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
    .required("Это обязательное поле"),
  phoneNumber: yup
    .string()
    .matches(/^\+?[0-9\s]*$/, "Неправильный формат номера")
    .required("Это обязательное поле"),
  interest: yup
    .string()
    .required("Это обязательное поле"),
});

const initialFormData: FormData = {
  name: "",
  phoneNumber: "",
  interest: ""
};

const SEND_TO = 'diasqazaqbro@mail.ru'
const MAIL_USERNAME = 'alyauoverasyl@gmail.com'
const MAIL_SERVER = 'smtp.gmail.com'
const MAIL_PORT = '465'
const MAIL_PASSWORD = 'rrxu fzmh hnrp mzoe'

export default function Form({ onSubmit = () => {} }: FormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResetting, setFormResetting] = useState(false);

  const normalizePhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const maxLength = 11;
    const formattedPhoneNumber = phoneNumber.substring(0, maxLength);
    if (!formattedPhoneNumber) return value;
    let formattedValue = `+${formattedPhoneNumber}`;
    const parsedPhoneNumber = parsePhoneNumberFromString(formattedValue);
    if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
      formattedValue = parsedPhoneNumber.formatInternational();
    }
    return formattedValue;
  }

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = normalizePhoneNumber(event.target.value);
    setFormData({ ...formData, phoneNumber: formattedValue });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const validationError = await schema.validate(formData, { abortEarly: false });
      onSubmit(formData);
      setErrors({});
      setFormResetting(true);
      setTimeout(() => {
        setFormData(initialFormData);
        setIsSubmitting(false);
        setFormResetting(false);
        axios.post(`https://mailer-production-0e07.up.railway.app/send_mail/?send_to=${SEND_TO}&header=Человек с именем ${formData.name} его номер ${formData.phoneNumber}&text=Его интересует: ${formData.interest}&MAIL_USERNAME=${MAIL_USERNAME}&MAIL_SERVER=${MAIL_SERVER}&MAIL_PORT=${MAIL_PORT}&MAIL_PASSWORD=${MAIL_PASSWORD}`)
      }, 1000);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const formErrors: Record<string, string> = {};
        err.inner.forEach((error: yup.ValidationError) => {
          if (error.path) formErrors[error.path] = error.message;
        });
        setErrors(formErrors);
        setIsSubmitting(false);
      } else {
        console.error("Validation error:", err);
      }
    }
  }

  return (
    <form className="" onSubmit={handleFormSubmit}>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input
          placeholder="Как к вам обращаться"
          type="text"
          name="name"
          disabled={formResetting}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      {errors.name && <h5 className='errors'>{errors.name}</h5>}
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input
          placeholder="+7 (XXX) XXX XX XX"
          type="tel"
          maxLength={16}
          disabled={formResetting}
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      {errors.phoneNumber && <h5 className='errors'>{errors.phoneNumber}</h5>}
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input
          placeholder="Что вас интересует?"
          type="text"
          name="interest"
          disabled={formResetting}
          value={formData.interest}
          onChange={handleInputChange}
        />
      </div>
      {errors.interest && <h5 className='errors'>{errors.interest}</h5>}
      <Button
        label={isSubmitting ? 'Отправка...' : 'Отправить'}
        disabled={isSubmitting || formResetting}
        className="form__btn rounded-[50px] py-4 md:px-8 md:pl-[204px] md:pr-[204px] mb-[15px]"
      />
    </form>
  )
}
