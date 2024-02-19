"use client"
import { useState } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as yup from "yup";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import './Form.scss';

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

export default function Form({ onSubmit = () => {} }: FormProps) { 
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    interest: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData({
      ...formData,
      phoneNumber: formattedValue
    });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    schema.validate(formData, { abortEarly: false })
      .then(() => {
        onSubmit(formData);
        setFormData({
          name: "",
          phoneNumber: "",
          interest: ""
        });
        setIsSubmitting(false);
        setErrors({});
      })
      .catch((err) => {
        const formErrors: Record<string, string> = {};
        err.inner.forEach((error: yup.ValidationError) => {
          if (error.path) {
            formErrors[error.path] = error.message;
          } else {
            console.error("Validation error path is undefined:", error);
          }
        });
        setErrors(formErrors);
        setIsSubmitting(false);
      });
  }
  

  return (
    <form className="" onSubmit={handleFormSubmit}>
      <div className="input__inner mb-[15px] rounded-[50px]">
        <Input 
          placeholder="Как к вам обращаться" 
          type="text" 
          name="name"
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
          value={formData.interest}
          onChange={handleInputChange}
        />
      </div>
      {errors.interest && <h5 className='errors'>{errors.interest}</h5>}
      <Button 
        label={isSubmitting ? 'Отправка...' : 'Отправить'} 
        disabled={isSubmitting} 
        className="form__btn rounded-[50px] py-4 md:px-8 md:pl-[204px] md:pr-[204px] mb-[15px]" 
      />
    </form>
  )
}