import { Get } from "../requests/get";
import { servicesApi } from "../utils/servicesApi";

export const getCoupons = async () => {
  try {
    let coupon = servicesApi("coupon");

	const req = await Get({
		url: `${coupon}`,
	})

    if (!req) {
      console.error('Erro na requisição. Resposta indefinida.');
      return { status: 500, data: null };
    }

    const res = { status: req.status, data: req.data };
    
    if (req.status === 200 && req.data) {
      console.log('Dados da API:', res);
    } else {
      console.error('Erro ao buscar cupons. Resposta inesperada:', res);
    }

    return res;
  } catch (error) {
    console.error('Erro ao buscar cupons', error);
    return { status: 500, data: null };
  }
};
