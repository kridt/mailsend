import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };

    console.log("Sending");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
