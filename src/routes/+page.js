// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch }) {
    const res =  await fetch('/data.json');
    const data = await res.json()

    return data;
}