import axios from "axios"
const BASE_URL=import.meta.env.VITE_BASE_URL

export async function getStudent() {
    try {
        const res = await axios(`${BASE_URL}/allStudent`);

        return res.data.students;

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function AddStudents(student) {
    try {
        const res = await axios.post(`${BASE_URL}/`,student);

        console.log("data",res.data);
        return res.data;
    } catch (error) {
    throw new Error(error.message);
    }
}