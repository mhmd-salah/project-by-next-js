
async function PostDetails ( { postId } ) {
  // let postId = postId;
  console.log(postId)
    const response = await fetch( `https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revaldate:120,
      }
  })
  const post = await response.json()
  return (
    <div>
      {/* <h1 className={"text-[26px]"}>post details</h1> */}
      <div className={"bg-sky-400 w-[60%] mx-auto mt-10 rounded-md p-5"}>
        <h1 className={"text-[22px] text-sky-800"}>{ post.title}</h1>
        <p className={"text-[20px]"}>{ post.body }</p>
      </div>
    </div>
  )
}

export default PostDetails
