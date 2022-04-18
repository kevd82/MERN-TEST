import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const UpdateCard = (props)=>{
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [prowess, setProwess] = useState("");
    const [wits, setWits] = useState("");
    const [vitality, setVitality] = useState("");
    const [abilityOne, setAbilityOne] = useState("");
    const [abilityTwo, setAbilityTwo] = useState("");
    const [abilityThree, setAbilityThree] = useState("");
    const [abilityFour, setAbilityFour] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/card/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setName(res.data.name);
            setImage(res.data.image);
            setProwess(res.data.prowess);
            setWits(res.data.wits);
            setVitality(res.data.vitality);
            setAbilityOne(res.data.abilityOne);
            setAbilityTwo(res.data.abilityTwo);
            setAbilityThree(res.data.abilityThree);
            setAbilityFour(res.data.abilityFour);
        })
        .catch((err)=>console.log(err))
    }, [id])

    
    const submitHandler=((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/card/${id}`,
        {
            name,
            image,
            prowess,
            wits,
            vitality,
            abilityOne,
            abilityTwo,
            abilityThree,
            abilityFour,
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate(`/displayOne/${id}`);
        })
        .catch((err)=>{
            console.log("err.response:", err.response);
            console.log("err.response.data", err.response.data);
            console.log("err.response.data.errors", err.response.data.errors);
            setErrors(err.response.data.errors);
    
    });
    
    });






return (
    <div>
        <h1>Burning Sands Character Card: Update</h1>
        <br/>
        <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}> <Link to = {"/DisplayAll"}>Home</Link></button>
        <br/>
        <br/>
        <h4>Please enter url for image; i.e. https://i.ibb.co/8zmvzpQ/Faeded.jpg</h4>
        <h4>Images are best with transparent background and width/height close to 406pixels/547pixels.</h4>
        <h4>Abilities are optional; please refer to rulebooks.</h4>
        <br/>
        <form onSubmit={submitHandler}>
        <div>
                <label>Character Name:  </label>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.name?
                        <p>{errors.name.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Image:  </label>
                <input value={image} onChange={(e)=> setImage(e.target.value)} type="text"/>
                
                    <br/>
                    {
                        errors.image?
                        <p>{errors.image.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Prowess:  </label>
                <input value={prowess} onChange={(e)=> setProwess(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.prowess?
                        <p>{errors.prowess.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Wits:  </label>
                <input value={wits} onChange={(e)=> setWits(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.wits?
                        <p>{errors.wits.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Vitality:  </label>
                <input value={vitality} onChange={(e)=> setVitality(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.vitality?
                        <p>{errors.vitality.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability One:  </label>
                <input value={abilityOne} onChange={(e)=> setAbilityOne(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityOne?
                        <p>{errors.abilityOne.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability Two:  </label>
                <input value={abilityTwo} onChange={(e)=> setAbilityTwo(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityTwo?
                        <p>{errors.abilityTwo.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability Three:  </label>
                <input value={abilityThree} onChange={(e)=> setAbilityThree(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityThree?
                        <p>{errors.abilityThree.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability Four:  </label>
                <input value={abilityFour} onChange={(e)=> setAbilityFour(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityFour?
                        <p>{errors.abilityFour.message}</p>
                        :null
                    }
                        <br/>
            </div>
            <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}>Update Character Card!</button>






        </form>
    




    </div>




)


}
export default UpdateCard;