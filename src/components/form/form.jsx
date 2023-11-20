import React from "react";
import "../form/form.css"

export const Form = ({ setData, edit, id, close }) => {
  const [inputs, setInputs] = React.useState({ firstName: "", lastName: "" });

  const changeInput = (e) => {
    setInputs((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (edit) {
      setData((p) =>
        p.map((item) => (item.id == id ? { ...inputs, id } : item))
      );
      close();

      return;
    }
    setData((p) => [...p, { ...inputs, id: Date.now() }]);
    setInputs({ firstName: "", lastName: "" });
  };

  return (
    <form  onSubmit={submit} className="form">
      <div className="">
        <input
          onChange={changeInput}
          value={inputs.firstName}
          type="text"
          name="firstName"
          className="input1"
          placeholder="Ism"
          // autoComplete="off"
        />
      </div>
      <br />
      <div>
        <input
          onChange={changeInput}
          value={inputs.lastName}
          type="text"
          name="lastName"
          className="input1"
          placeholder="Familya"
        />
      </div>
<br />

      <button style={{textAlign:"center",marginLeft:"200px"}} type="submit" className="btn2">Send</button>
    </form>
  );
};
