const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0 ? 0 :
    blogs.reduce((sum,post) => sum+post.likes,0)
}

const favoriteBlog = (blogs) => {
  if(blogs.length === 0)return null
  const mostLikes = blogs.reduce((a,b) => a>b.likes?a:b.likes,0)
  const favoriteBlog = blogs.find((blog) => blog.likes === mostLikes )
  return favoriteBlog
}




module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}