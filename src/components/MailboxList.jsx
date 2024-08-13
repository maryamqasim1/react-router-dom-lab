import { Link } from "react-router-dom/dist";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((x) => {
          return (
            <li>
              <Link to={`/mailboxes/${x._id}`}>Mailboxes {x._id}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
