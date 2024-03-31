function setItemsAndPaint(arr){
  localStorage.setItem("book-list", JSON.stringify(arr))
  paint(arr)
}

var arr = JSON.parse(localStorage.getItem("book-list")) || []

var form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  var bookName = document.querySelector("[name = 'book-name']").value
  var authorName = document.querySelector("[name = 'author-name']").value
  var bookDesc = document.querySelector("[name = 'book-desc']").value
  var bookAdded = document.querySelector("[name = 'book-added']").value
  var bookCategory = document.querySelector("[name = 'book-category']").value
  var bookPrice = document.querySelector("[name = 'book-price']").value
  arr.push({bookName,authorName,bookDesc,bookAdded,bookCategory,bookPrice})
  setItemsAndPaint(arr)
  console.log(arr)
})




