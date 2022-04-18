import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import html2canvas from "html2canvas";



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
    }, [id]);

    
        const printRef = React.useRef();
      
        const handleDownloadImage = async () => {
            const element = printRef.current;
            const canvas = await html2canvas(element);
        
            const data = canvas.toDataURL('image/jpg');
            const link = document.createElement('a');
        
            if (typeof link.download === 'string') {
              link.href = data;
              link.download = 'image.jpg';
        
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              window.open(data);
            }
          };

    





return (
    <div>
        <h1>Character Card for {card.name} </h1>
        <h3><button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}  ><Link to = {"/displayAll"}>Home</Link></button></h3>
        {/* <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}} onClick={handleDownloadImage} >Download {card.name}</button></h3> */}
        <br/>
    
            <div ref={printRef} style={{display: "inline-flex", padding: "22px", width: "930px", height: "600px", outline: "2px solid black", marginLeft: "auto", marginRight: "auto", background: "#f8ecc2", fontWeight: "822"}}> 
                <div>
                    <table  style= {{textAlign: "center", padding: "0px 22px 0px 22px", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", outline: "1px solid black", width: "400px", height: "550", borderRadius: "25px", boxShadow: "5px 5px grey"}}>
                        <tr>{card.name}</tr>
                        <tr><img style={{marginLeft: "auto", marginRight: "auto", width: "400px", height: "443px", padding: "22px 12px 22px 12px"}} src ={card.image}></img></tr>
                        <tr style = {{width: "400px", height: "50px", wordSpacing: "50px"}}>
                        {card.prowess}  {card.wits}  {card.vitality}
                        </tr>

                    </table>
                </div>

            <div style={{display: "inline-block", marginLeft: "50px"}}>
                <table style= {{textAlign: "center", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", outline: "1px solid black", width: "400px", height: "260", marginBottom: "15px" }}>
                    <thead>
                        <tr style={{height: "50px"}}>
                            <th style={{outline: "1px solid black"}}>Vitality</th>
                            <th style={{outline: "1px solid black"}}>Available Pool</th>
                    
                        </tr>

                    </thead>
                    <tbody>
                        <tr style={{width: "400px", height: "210px", outline: "1px solid black"}}>
                            <td style={{outline: "1px solid black"}}></td><td style={{outline: "1px solid black"}}></td>
                        </tr>
                    </tbody>

                </table>
                <br/>
                <table style= {{textAlign: "center", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", outline: "1px solid black", width: "400px", height: "260" }}>
                    <thead>
                        <tr style={{width: "100%", height: "50px", outline: "1px solid black"}}>
                            <th>Abilities</th>
                        </tr>
                
                    </thead>
                    <tbody>
                        <tr style={{width: "100%", height: "210px", outline: "1px solid black"}}>
                            <td>{card.abilityOne}</td>
                            <td>{card.abilityTwo}</td>
                            <td>{card.abilityThree}</td>
                            <td>{card.abilityFour}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        




    </div>




)


}
export default DisplayOne;