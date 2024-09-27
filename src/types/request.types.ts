import { HttpMethod } from "@/enums/httpMethods.emuns"

export type Request = {
	method: HttpMethod,
	url: string,
	body?: {
		[key: string | number]: string,
	},
	headers?: {
		[key: string | number]: string,
	},
}