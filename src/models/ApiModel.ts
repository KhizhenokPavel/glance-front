import type {Request} from "@/types/request.types";

export class ApiModel {
    public apiUrl: string = 'https://glance.back.loc/api/';

    async sendRequest(requestProps: Request) {
        const headers = new Headers();

        if (requestProps.headers) {
            for (const header in requestProps.headers) {
                headers.append(header, requestProps.headers[header]);
            }
        }

        try {
            const response = await fetch(this.apiUrl + requestProps.url, {
                headers: headers,
                method: requestProps.method,
                body: JSON.stringify(requestProps.body),
            });

            if (response.ok) {
                return await response.json();
            }

            throw new Error('Network response was not ok');
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}