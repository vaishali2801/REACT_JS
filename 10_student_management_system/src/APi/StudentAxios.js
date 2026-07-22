import axios from "axios"
const BASE_URL=import.meta.env.VITE_BASE_URL

export async function getStudent() {
    try {
        const res = await axios(`${BASE_URL}/allStudent`);

        if(res.status !== 200){
            throw new Error("student not fetched")
        }

        return res.data.students;

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function AddStudents(student) {
    try {
        const res = await axios.post(`${BASE_URL}/`,student);

        if(res.status !== 201){
            throw new Error("student not fetched")
        }

        console.log("data",res.data);
        return res.data;
    } catch (error) {
    throw new Error(error.message);
    }
}
export async function DeleteStudent(id) {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`);

        if(res.status !== 200){
            throw new Error("student not fetched")
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }

}
export async function UpdateStudent(id,studentData){
    try {
        const res = await axios.patch(`${BASE_URL}/${id}`, studentData);

        if(res.status !== 200){
            throw new Error("student not fetched")
        }

        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};