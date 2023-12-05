// CouponsList.tsx
import React, { useEffect, useState } from 'react';
import { getCoupons } from '../../../api/getCoupons';
import CouponCard from './';

type Coupon = {
  id: number;
  nome: string;
  codigo: string;
  validade: Date;
  valorDoCupom: number;
};

const CouponsList: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  const getCouponsData = async () => {
    try {
      const res = await getCoupons();

      if (res.status === 200 && res.data) {
        const parsedCoupons = parseCouponString(res.data);
        setCoupons(parsedCoupons);
      } else {
        console.error('Erro ao buscar cupons. Resposta inesperada:', res);
      }
    } catch (error) {
      console.error('Erro ao buscar cupons', error);
    }
  };

  useEffect(() => {
    getCouponsData();
  }, []);

  const parseCouponString = (couponString: string): Coupon[] => {
    return couponString.split('\n').map((couponLine) => {
      const [id, nome, codigo, validade, valorDoCupom] = couponLine
        .replace(/ID: |Nome: |Codigo: |Validade: |Valor do cupom: /g, '')
        .split(', ');

      return {
        id: parseInt(id, 10),
        nome,
        codigo,
        validade: new Date(validade),
        valorDoCupom: parseFloat(valorDoCupom),
      };
    });
  };

  return (
    <div>
      {coupons.map((coupon) => (
        <CouponCard key={coupon.id} coupon={coupon} />
      ))}
    </div>
  );
};

export default CouponsList;
