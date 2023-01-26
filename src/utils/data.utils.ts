export const getData = async <T>(url: string): Promise<T> => {
    const respone = await fetch(url);
    return await respone.json();
}