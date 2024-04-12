import PostDetails from "@/app/components/PostDetial";
import { Suspense } from "react";
async function PostDetailsPage ( { params } ) {
  const postId = params.postId;

  return (
    <div>
      <h1 className={ "text-[26px]" }>post details</h1>
      <Suspense fallback={"Loading"}>
        <PostDetails postId={ postId} />
      </Suspense>
    </div>
  )
}

export default PostDetailsPage
