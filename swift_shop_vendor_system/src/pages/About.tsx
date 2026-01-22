import {getAllProduct} from "../Services/ProductService"
import { useEffect } from "react";
function About() {
    useEffect(() => {
        const fetchData = async() => {
        return await getAllProduct();
        }
        fetchData()
    }, []);

  return (
    <>
        
        <h1>hello</h1>
    </>
  )
}

export default About
