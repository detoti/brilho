// CouponForm.tsx
import React, { useState } from 'react';
import './style.scss';

type Coupon = {
  id: number;
  nome: string;
  codigo: string;
  validade: Date;
  valorDoCupom: number;
};

type CouponFormProps = {
  onCouponSubmit: (coupon: Coupon) => void;
};

const CouponForm: React.FC<CouponFormProps> = ({ onCouponSubmit }) => {
  const [couponData, setCouponData] = useState({
    nome: '',
    codigo: '',
    validade: '',
    valorDoCupom: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCouponData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();
	const { nome, codigo, validade, valorDoCupom } = couponData;
  
	const newCoupon = {
	  cupomName: nome,
	  cupomCode: codigo,
	  cupomValue: parseFloat(valorDoCupom),
	  cupomDate: validade,
	};
  
	try {
	  const response = await fetch('https://brilho-api.onrender.com/cupons/', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(newCoupon),
	  });

      if (!response.ok) {
        console.error('Erro ao adicionar cupom. Resposta inesperada:', response);
        return;
      }

      onCouponSubmit(newCoupon);
      // Limpar o formulário após o envio, se necessário
      setCouponData({
        nome: '',
        codigo: '',
        validade: '',
        valorDoCupom: 0,
      });
    } catch (error) {
      console.error('Erro ao adicionar cupom', error.message);
    }
  };

  return (
    <div className="coupon-form">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={couponData.nome} onChange={handleInputChange} />
        </label>
        <label>
          Código:
          <input type="text" name="codigo" value={couponData.codigo} onChange={handleInputChange} />
        </label>
        <label>
          Validade:
          <input type="date" name="validade" value={couponData.validade} onChange={handleInputChange} />
        </label>
        <label>
          Valor do Cupom:
          <input type="number" name="valorDoCupom" value={couponData.valorDoCupom} onChange={handleInputChange} />
        </label>
        <button type="submit">Adicionar Cupom</button>
      </form>
    </div>
  );
};

export default CouponForm;
