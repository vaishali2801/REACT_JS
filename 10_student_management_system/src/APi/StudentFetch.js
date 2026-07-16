const BASE_URL=import.meta.env.VITE_BASE_URL;
export async function getStudent() {
    try {
        const res = await fetch(`${BASE_URL}/allStudent`);
        const data = await res.json();
        console.log("data",data);
        if(!res.ok){
            throw new Error("failed to fetched");
        }
        return data.students;
    } catch (error) {
        throw new Error(error.message);
    }
}