import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    boxSize: "Small",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="boxholderName">Boxholder Name: </label>
          <input
            name="name"
            type="text"
            id="boxholderName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="boxSize">Box Size: </label>
          <select id="boxSize" name="boxSize" value={formData.boxSize} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
