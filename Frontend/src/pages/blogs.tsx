import { BlogsCard } from "../components/blogsCard"
import { AppBar } from "../components/app_bar"
import { useBlogs } from "../hooks/index"
import { BlogSkeleton } from "../components/blog_skeleton";

export const Blogs=function(){
    const {loading,blogs,user}= useBlogs();
    return(<>
    <AppBar name={ user||"@"} ></AppBar>
       <div>
        {loading ? 
          <div><BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          </div>
        : 
         blogs.map(function(blog){
        
            return(<div><BlogsCard title={blog.title} content={blog.content} author_name={blog.author.name||"Anonymous"} date="23232e3" id={blog.id}></BlogsCard></div>)
         })
        }
      </div>
    </>)
}