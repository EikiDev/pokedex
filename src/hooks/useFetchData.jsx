import axios from "axios";

export default async function useFetchData(url) {
        try {
                const { data } = await axios.get(url)
                return data
        } catch (error) {
                console.log(`Ocorreu um erro: ${error.message}`);
        }
};
