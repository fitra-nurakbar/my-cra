import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import FileNotExist from "../../components/FileNotExist";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { urlMain } from "../../libs/endpoint";
import styles from "../../styles/Posts.module.css";

export default function PostId() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getData() {
      const req = await fetch(`${urlMain}/${id}`);
      const res = await req.json();
      const data = await res.blog;
      if (!data) {
        return setNotFound(true);
      }
      setPost(data);
      setLoading(false);
    }
    getData();
  }, [id]);

  const deleteData = (id) => {
    fetch(`${urlMain}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/post");
      })
      .catch((err) => {
        throw err;
      });
  };

  if (notFound) {
    return <FileNotExist>Post does'nt exist</FileNotExist>;
  }

  return (
    <Layout title={"Post Detail"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1>Post detail</h1>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Card
            key={post.id}
            title={post.title}
            body={post.description}
            button={
              <>
                <Button onClick={() => deleteData(post.id)}>Delete</Button>
                <Link to={`/post/edit/${post.id}`}>
                  <Button className="bg-green-500">Edit</Button>
                </Link>
              </>
            }
          />
        )}
      </section>
    </Layout>
  );
}
