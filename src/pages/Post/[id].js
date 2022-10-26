import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { urlMain } from "../../libs/endpoint";
import styles from "../../styles/Posts.module.css";

export default function PostId() {
  const { id } = useParams();
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

  if (notFound) {
    return <h1>Post does'nt exist</h1>;
  }

  return (
    <Layout title={"Post Detail"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1>Post detail</h1>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Card title={post.title} body={post.description} />
        )}
      </section>
    </Layout>
  );
}
