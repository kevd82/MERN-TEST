import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const DisplayAll = (props)=>{
    const [cardList, setCardList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/card")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setCardList(res.data);
        })
        .catch((err)=>console.log(err))
    }, []);


    const deleteOneCard = (idBelow)=>{
        axios.delete(`http://localhost:8000/api/pets/${idBelow}`)
        .then ((res)=>{
            console.log(res);
            console.log(res.data);
            const newList = cardList.filter((card, index)=>card._id !== idBelow)
            setCardList(newList);
        })
        .catch((err)=>{
            console.log(err);
        });
    };




return (
    <div>
        <h1>Barbaric Splendor Character Cards</h1>
            <br/>
            <h3><Link to = {"/createCard"}>Add new card</Link><Link to = {"/dashboard"}>Home</Link></h3>
            
            <div style={{width: "auto", padding: "30px"}}>
            <table style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                <thead>
                <tr>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Name</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Image</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Prowess</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Wits</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Vitality</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Skill 1</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Skill 2</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Skill 3</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>SKill 4</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Creator</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Available Actions</th>
                </tr>
                </thead>
                <tbody>

            {
            cardList.map((card, index)=>(
                <tr key={card._id} style={{outline: "1px solid black", width: "Auto", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "100%", fontWeight: "822"}}>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.name}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}><img style={{width: "60px"}} src ={card.image}></img></td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.prowess}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.wits}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.vitality}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityOne}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityTwo}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityThree}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityFour}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}>{card.createdBy.username}</td>
                    <td style={{outline:"1px solid black", padding: "5px"}}><Link to={`/displayOne/${card._id}`}>Show card</Link></td>

                </tr>
            ))  
                        
            
            }
            </tbody>
            </table>
            </div>
    




    </div>




)


}
export default DisplayAll;