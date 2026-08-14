import { Navigate, redirect } from "@solidjs/router";

const target = "./introduction";

export const route = {
	preload() {
		return redirect(target);
	},
};

export function GET() {
	return redirect(target);
}

export default function () {
	return <Navigate href={target} />;
}
