import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      <p>ID: {selectedBox._id}</p>
      <h2>{selectedBox.name}</h2>
      <p>Box Size: {selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
