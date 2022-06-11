import React, { forwardRef } from "react";
import { Image,Grid } from "@nextui-org/react";

const Post = forwardRef(({ timestamp, post, image }, ref) => {
  return (
    <div className="relative flex">
        <Grid>
        <Image src={image} alt="" width="auto" height={250} />
        </Grid>
    </div>
  );
});

export default Post;
