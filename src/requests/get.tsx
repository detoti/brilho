import axios from "axios";

type GetProps = {
	url: string;
	data?: object;
};

export const Get = async (props: GetProps) => {
	const { url, data } = props;

	try {
		let req = await axios({
			method: "get",
			url: url,
			data: data,
		})
		return req;
	} catch (Error) {
		console.log(Error);
		return Error?.response;
	}
}