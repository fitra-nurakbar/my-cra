import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import { urlMain } from '../../libs/endpoint';
import styles from "../../styles/Posts.module.css"

export default function EditPost() {
  const [fields, setFields] = useState({
    title: "",
    description: ""
  })
  const navigate = useNavigate()

  const { id } = useParams()

  function inputHandler(e) {
    const name = e.target.name
    setFields({
      ...fields,
      [name]: e.target.value
    })
  }

  
  useEffect(() => {
    fetch(`${urlMain}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setFields(data.blog)
    })
  },[])

  function editHandler(e, id) {
    e.preventDefault()

    fetch(`${urlMain}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(fields)
    })
    .then(() => {
      navigate("/post")
    })
  }

  return (
    <Layout title={"Edit"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1>Edit Post</h1>
        <div className={styles.card}>
          <form onSubmit={editHandler.bind(this)}>
            <label htmlFor='title'>Title :</label>
            <input
              name='title'
              onChange={inputHandler.bind(this)}
              type='text'
              id='title'
              placeholder='Input title here'
              value={fields.title}
            />
            <label htmlFor='content'>Content :</label>
            <textarea
              name='description'
              onChange={inputHandler.bind(this)}
              id='content'
              rows={5}
              placeholder='Input content here'
              value={fields.description}
            />
            <Button type="submit">Edit</Button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
