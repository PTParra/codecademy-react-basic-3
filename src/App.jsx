import { Card } from "./componentes/card/card"
import { comments } from "./information/commentData"

export const App = () => {

  const mapComment = (comment, i) => {
      return(
        <Card key={"Comment_" + i} commentObject={comment} />
      )
  }

  return (
    <>
      {comments.map(mapComment)}
    </>
  )
}
