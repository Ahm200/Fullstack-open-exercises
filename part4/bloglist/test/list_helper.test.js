const listHelper = require('../utils/list_helper')
const {zeroBlog,oneBlog,Manyblogs} = require('./blog_post_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
  test('of empty list is zero',() => {
    const result = listHelper.totalLikes(zeroBlog)
    expect(result).toBe(0)
  })
  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(Manyblogs)
    expect(result).toBe(26)
  })
})

describe('favorite blog',() => {
  test('when list as no blog return null',() => {
    const result = listHelper.favoriteBlog(zeroBlog)
    expect(result).toEqual(null)
  })

  test('when list as one blog, return it',() => {
    const result = listHelper.favoriteBlog(oneBlog)
    expect(result).toEqual(oneBlog[0])
  })

  test('when list as many blogs,return the one with highest likes',() => {
    const result = listHelper.favoriteBlog(Manyblogs)
    expect(result).toEqual(Manyblogs[2])
  })
})