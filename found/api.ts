import { IItems } from "./types/items";
const baseURL = 'http://localhost:3001'

export const getAllItems = async ():Promise<IItems[]> => {
    const res = await fetch(`${baseURL}/items`);
    const items = res.json();
    return items
}