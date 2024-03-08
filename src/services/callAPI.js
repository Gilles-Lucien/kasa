const fetchData = async () => {
    try {
        const response = await fetch("../logements.json");
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return error;
    }
};

export default fetchData;