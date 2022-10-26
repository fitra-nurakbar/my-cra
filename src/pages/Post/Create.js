import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { urlMain } from "../../libs/endpoint";
import styles from "../../styles/Posts.module.css";

export default function CreatePost() {
  const [fields, setFields] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate()


  function inputHandler(e) {
    const name = e.target.name;
    
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }


  async function createHandler(e) {
    e.preventDefault()

    const data = {
      title: fields.title,
      description: fields.content,
    };
    try {
      const req = await fetch(urlMain, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      await req.json();
      navigate("/post")
    } catch (err) {
        setError(err)
    }
  }

  if(error) {
    return <h1>Data error</h1>
  }

  return (
    <Layout title={"Create post"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1>Posts Page</h1>
        <div className={styles.card}>
          <form onSubmit={createHandler.bind(this)}>
            <label htmlFor='title'>Title :</label>
            <input
              name='title'
              onChange={inputHandler.bind(this)}
              type='text'
              id='title'
              placeholder='Input title here'
            />
            <label htmlFor='content'>Content :</label>
            <textarea
              name='content'
              onChange={inputHandler.bind(this)}
              id='content'
              rows={5}
              placeholder='Input content here'
            />
            <Button type="submit">Post</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
