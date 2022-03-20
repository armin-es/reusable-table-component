export const pagination = (allPosts, postsPerPage, currentPage) => {
  const currentPosts = allPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const pageCount = Math.ceil(allPosts.length / postsPerPage);
  return {currentPosts, pageCount};
}