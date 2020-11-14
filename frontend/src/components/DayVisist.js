import React from "react";
import { Form } from "react-bootstrap";

const DayVisist = ({ days }) => {
  return (
    <>
      <Form.Check
        readOnly
        className='py-2'
        inline
        required
        checked={days.find((day) => day === 2)}
        label='Lunes'
        feedback='You must agree before submitting.'
      />
      <Form.Check
        readOnly
        className='py-2'
        checked={days.find((day) => day === 3)}
        inline
        required
        label='Martes'
        feedback='You must agree before submitting.'
      />
      <Form.Check
        readOnly
        className='py-2'
        checked={days.find((day) => day === 4)}
        inline
        required
        label='Miércoles'
        feedback='You must agree before submitting.'
      />
      <Form.Check
        readOnly
        className='py-2'
        checked={days.find((day) => day === 5)}
        inline
        required
        label='Jueves'
        feedback='You must agree before submitting.'
      />
      <Form.Check
        readOnly
        className='py-2'
        checked={days.find((day) => day === 6)}
        inline
        required
        label='Viernes'
        feedback='You must agree before submitting.'
      />
      <Form.Check
        readOnly
        className='py-2'
        checked={days.find((day) => day === 7)}
        inline
        required
        label='Sábado'
        feedback='You must agree before submitting.'
      />
    </>
  );
};

export default DayVisist;
