import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeContext from "./CoffeeContext";

export const CoffeeProvider = (props) => {

    const [ coffee, setCoffee ] = useState([]);
    const baseUrl = "http://localhost:3000/api/coffee/";

    useEffect(() => {
        async function fetchData() {
            await getAllCoffee();
        }
        fetchData();
    }, []);

    function getAllCoffee() {
        return axios.get(baseUrl).then(response => setCoffee(response.data));
    }

    function getCoffee(id) {
        
    }

    function addCoffee(coffee) {        

    }

    function editCoffee(coffee) {

    }

    function deleteCoffee(id) {

    }

    return (
        <CoffeeContext.Provider value={{
            coffee,
            getCoffee,
            addCoffee,
            editCoffee,
            deleteCoffee
        }}>
            { props.children }
        </CoffeeContext.Provider>
    )
};