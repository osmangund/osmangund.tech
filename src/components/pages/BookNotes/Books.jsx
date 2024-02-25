import "./Books.scss"
import PropTypes from "prop-types"
import { books } from "./bookContents"
import { useEffect } from "react"
import { book, bookImg } from "../../../utils/links"
import ArrowToRight from "../../icons/ArrowToRight"
import Input from "../../Input/Input"
import Form from "../../Input/Form"

function BookCard({ book: { title, author } }) {
  return (
    <article className="book-card">
      <div className="book__image">
        <a href={book(title)}>
          <img src={bookImg(title)} alt={`${title} book cover.`} aria-hidden />
        </a>
      </div>
      <div className="book__content">
        <h1 className="book__title">{title}</h1>
        <h2 className="book__author">{author}</h2>
      </div>
    </article>
  )
}

export default function BookNotes(props) {
  useEffect(() => {
    document.title = props.title
  }, [])
  return (
    <>
      <section id="book-notes">
        <div id="book-notes__info">
          <div className="container">
            <div>
              <h1>📚 Book summaries</h1>
              <p>
                If you like books and growth, this is for you. Join the OG
                Letter and I&apos;ll send you on books about psychology,
                science, marketing and sales.
              </p>
            </div>

            <Form buttonValue="Join">
              <Input label="Your favorite email" name="email" />
            </Form>
          </div>
          <div className="container" />
        </div>
        <div id="books">
          <ArrowToRight className="arrow-icon" />
          {books.map((book) => {
            return <BookCard key={book.id} book={book} />
          })}
        </div>
      </section>
    </>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
}

BookNotes.propTypes = {
  title: PropTypes.string,
}
