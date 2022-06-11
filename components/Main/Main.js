import styles from '../../styles/Feed.module.css'

import React from "react";
import { useState, useEffect,useRef } from "react";
import Post from "./Post";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { Grid } from "@nextui-org/react";
import { useSession } from "next-auth/react";

function Main() {
  const { data: session } = useSession();
  const [name, setName] = useState([]);


  const [photos,setPosts] = useState([])

  useEffect(() => {
    return onSnapshot(query(collection(db,'photos',`${session.user.email}`,`${session.user.email}`), orderBy('timestamp','desc')), snapshot => {
      setPosts(snapshot.docs);
    });

  }, [db])







  return (
    <div className={styles.feed}>
      <div className={styles.main}>
      <Grid.Container gap={1}>
        {photos.map((photos) => (
          <Post
          key={photos.data().username}
            username={photos.data().username}
            image={photos.data().image}
          />
        ))}
        </Grid.Container>
      </div>
    </div>
  );
}

export default Main;
