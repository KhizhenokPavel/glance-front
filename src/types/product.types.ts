export type Product = {
	name: string,
	price: number,
	currency: string,
	discount?: number,
	isStock?: boolean,
	isLiked?: boolean,
	images: Array<string>,
	isInBasket?: boolean,
	description: string,
}