import React from "react";

function PostPage({ params }: { params: any }) {
  return <div>PostPage: {params.post}</div>;
}

export default PostPage;
