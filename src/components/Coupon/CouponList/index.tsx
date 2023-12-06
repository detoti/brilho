// CouponsList.tsx
import React, { useEffect, useState } from 'react';
import './style.scss';

type Coupon = {
  id: number;
  nome: string;
  codigo: string;
  validade: Date;
  valorDoCupom: number;
};

const CouponsList: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  useEffect(() => {
    const getCouponsData = async () => {
      try {
        const response = await fetch('https://brilho-api.onrender.com/cupons');

        if (!response.ok) {
          console.error('Erro ao buscar cupons. Resposta inesperada:', response);
          return;
        }

        const data = await response.json();
        const parsedCoupons = parseCoupons(data);
        setCoupons(parsedCoupons);
      } catch (error) {
        console.error('Erro ao buscar cupons', error.message);
      }
    };

    getCouponsData();
  }, []);

  const parseCoupons = (data: any[]): Coupon[] => {
    return data.map((couponData: any) => {
      return {
        id: couponData.id,
        nome: couponData.cupomName,
        codigo: couponData.cupomCode,
        validade: new Date(couponData.cupomDate),
        valorDoCupom: couponData.cupomValue,
      };
    });
  };

  return (
    <div className="coupons-list">
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            <strong>Cupom:</strong> {coupon.nome}<br />
            <strong>Código:</strong> {coupon.codigo}<br />
            <strong>Validade:</strong> {coupon.validade.toDateString()}<br />
            <strong>Valor do Cupom:</strong> R$ {coupon.valorDoCupom.toFixed(2)}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouponsList;
