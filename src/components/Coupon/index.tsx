// CouponCard.tsx
import React from 'react';

type CouponCardProps = {
  coupon: {
    id: number;
    nome: string;
    codigo: string;
    validade: Date;
    valorDoCupom: number;
  };
};

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  const { nome, codigo, validade, valorDoCupom } = coupon;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{nome}</h3>
      <p><strong>Código:</strong> {codigo}</p>
      <p><strong>Validade:</strong> {validade.toDateString()}</p>
      <p><strong>Valor do Cupom:</strong> R$ {valorDoCupom.toFixed(2)}</p>
    </div>
  );
};

export default CouponCard;
