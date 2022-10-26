import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Posts.module.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { urlMain } from "../../libs/endpoint";
import FileNotExist from "../../components/FileNotExist";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [hapusId, setHapusId] = useState();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function getData() {
    setLoading(true);
    fetch(urlMain, {
      method: "GET",
      headers: {
        "Content-Type": "App/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.blogs);
        if (!data.blogs) {
          return setNotFound(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }
  const deleteData = (id) => {
    setLoading(true);
    fetch(`${urlMain}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getData();
    deleteData(hapusId);
  }, [hapusId]);

  return (
    <Layout title={"posts"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1 className={styles.head}>Post</h1>
        <Button className="mb-5 bg-sky-500">
          <Link to={"/post/create"}>Create New</Link>
        </Button>
        {notFound ? (
          <FileNotExist>File posts does'nt exist</FileNotExist>
        ) : loading === true ? (
          <h1>Loading</h1>
        ) : (
          <div className={styles.contents}>
            {posts.map((data) => (
              // <Link key={data.id} to={`/post/${data.id}`}>
              <Card
                key={data.id}
                title={data.title}
                body={data.description}
                button={
                  <>
                    <Button onClick={() => setHapusId(data.id)}>Delete</Button>
                    <Link to={`/post/edit/${data.id}`}>
                      <Button className="bg-green-500">Edit</Button>
                    </Link>
                  </>
                }
              />
              // </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
