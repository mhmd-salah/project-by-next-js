import Link from "next/link";

export const metadata = {
  title: "All Posts",
  
}

async function PostsPage () {
  await new Promise( ( reslove ) => {
    setTimeout( () => {
      reslove()
    },2000)
  })
  const response = await fetch( 'https://jsonplaceholder.typicode.com/posts', {
    next: {
      revaldate: 120,
    }
  } );
  const posts = await response.json();
  const postsJsx = posts.map( ( post ) => {
    return (
      <div className={ "text-center bg-slate-300  text-black w-[25%] p-5 rounded-md" }>
        <Link 
            href={ `posts/${ post.id }` }>
            <h1>{ post.titel }</h1>
            <p>{ post.body }</p>
          </Link>
        </div>
    );
  } );
  return (
    <>
      <h1 className={"my-7 text-[26px]"}>posts page </h1>
      {/* posts */ }
      <div className={ "flex flex-wrap gap-5 justify-center" }>
        { postsJsx }
      </div>
    </>
  );
}
export default PostsPage;