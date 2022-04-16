import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const DisplayOne = (props)=>{
    const navigate = useNavigate();
    const{id} = useParams();
    const[card, setCard] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/card/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setCard(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);





return (
    <div>
        <h1>Character Card for {card.name} </h1>
        <br/>
        <h3><Link to = {"/dashboard"}>Home</Link></h3>
        <br/>
        <div style={{padding: "22px", width: "930px", height: "600px", outline: "2px solid black", marginLeft: "auto", marginRight: "auto", background: "#f8ecc2", fontWeight: "822"}}> 
            <table style= {{textAlign: "center", padding: "0px 22px 0px 22px", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", outline: "1px solid black", width: "400px", height: "550" }}>
                <tr>{card.name}</tr>
                <tr><img style={{marginLeft: "auto", marginRight: "auto", width: "400px", height: "443px", padding: "22px 12px 22px 12px"}} src ={card.image}></img></tr>
                <tr style = {{width: "400px", height: "50px", wordSpacing: "50px"}}>
                    {card.prowess}  {card.wits}  {card.vitality}
                </tr>

            </table>
        </div>
        




    </div>




)


}
export default DisplayOne;