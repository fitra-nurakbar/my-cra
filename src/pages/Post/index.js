import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Posts.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { urlMain } from "../../libs/endpoint";

export default function Post() {
  const [posts, setPosts] = useState([])
  const [hapusId, setHapusId] = useState()
  const [loading, setLoading] = useState(false)

  function getData() {
    setLoading(true)
    fetch(urlMain, {
      method: "GET",
      headers: {
        "Content-Type": "App/json"
      }
    })
    .then((res) => res.json())
    .then((object) => object.blogs)
    .then((data) => {
      setPosts(data)
      setLoading(false)
    })
    // .catch((err) => console.log(err))
  }
  const deleteData = (id) => {
    setLoading(true)
    fetch(`${urlMain}/${id}`, {
      method: "DELETE"
    })
    .then((res) => {
      res.json()
      setLoading(false)
    })
    // .catch((err) => console.log(err))
  }
  useEffect(() => {
    getData()
    deleteData(hapusId)
  }, [hapusId])

  return (
    <Layout title={"posts"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1 className={styles.head}>Post</h1>
        <Button className='mb-5 bg-sky-500'>
          <Link to={"/post/create"}>Create New</Link>
        </Button>
        {loading === true ?
          <h1>Loading</h1> 
        :
        <div className={styles.contents}>
          {posts.map((data) => (
              <Card key={data.id} title={data.title} body={data.description} button={
                <>
                  <Button onClick={() => setHapusId(data.id)}>Delete</Button>
                  <Button className="bg-green-500"><Link to={`/post/edit/${data.id}`}>Edit</Link></Button>
                </>
          }/>
          ))}
          </div>
      }
      </section>
    </Layout>
  );
}
