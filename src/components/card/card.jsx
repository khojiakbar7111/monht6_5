import React from "react";
import { Modal } from "../ui/modal";
import { Form } from "../form";

export const Card = ({ firstName, lastName, id, setData }) => {
  const [open, setOpen] = React.useState(false);
  const deleteItem = () => {
    setData((p) => p.filter((item) => item.id !== id));
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div style={{width:"300px", margin:"auto"}}>
        <h1>{firstName}</h1>
        <br />
        <p>{lastName}</p>
        <br />
        <div style={{display:"flex", alignItems:"center",textAlign:"center",  maxWidth:"300px", justifyContent:"space-around"}}>
           <button onClick={deleteItem} className="btn2">delete</button>

        <button onClick={openModal} className="btn2">Edit</button>
        </div>

      </div>
      <br />
      <Modal isOpen={open} close={setOpen}>
        <Form edit id={id} close={setOpen} setData={setData} />
      </Modal>
    </>
  );
};
