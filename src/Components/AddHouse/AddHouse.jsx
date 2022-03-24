import { useEffect, useState } from "react";
import axios from "axios";
export const AddHouse = () => {

useEffect(()=>{
return(()=>{
  console.log("Add House unmounted")
})
},[]);

  const [form,setForm]=useState({
    "name":"",
    "ownerName":"",
    "address":"",
    "areaCode":"",
    "rent":"",
    "married":false,
    "bachelor":false,
    "image":""
  })
const handleChange=(e)=>{
let {className,value,checked,type}=e.target
 if(type=="checkbox"&&className=="married"){
   if(checked){
     value=true;
   }else{
     value=false;
   }
 }
 if(type=="checkbox"&&className=="bachelor"){
  if(checked){
    value=true;
  }else{
    value=false;
  }
}
setForm({...form,[className]:value})
console.log(form);
}
const handleSubmit=(e)=>{
e.preventDefault();
axios.post("http://localhost:8080/houses",form).then(()=>{
  alert("dataSubmitted")
})

}


    return (
      <div className="addHouseContainer">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <label>name</label>
          <input type="text" className="name" value={form.name} required placeholder="name" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>ownerName</label>
          <input value={form.ownerName} type="text" className="ownerName" required placeholder="ownerName" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>address</label>
          <input value={form.address} type="text" className="address" required placeholder="address" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>areaCode</label>
          <input value={form.areaCode} type="text" className="areaCode" required placeholder="areaCode" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>rent</label>
          <input value={form.rent} type="number" className="rent" required placeholder="rent" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input checked={form.bachelor} type="checkbox" className="bachelor" placeholder="bachelor" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>married</label>
          <input checked={form.married} type="checkbox" className="married" placeholder="married" onChange={(e)=>handleChange(e)}/>
          <br />
          <label>image</label>
          <input value={form.image} type="text" className="image" required placeholder="image" onChange={(e)=>handleChange(e)}/>
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };
  