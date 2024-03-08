const fetchData = async () => {
    try {
        const response = await fetch("../logements.json");
        const jsonData = await response.json();
        // setData(jsonData);
        return jsonData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return error;
    }
};

export default fetchData;