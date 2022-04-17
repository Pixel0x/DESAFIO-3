import { Posts } from "../../Posts/DBCard";
import { CMain, Container, Post, PostImage } from "./style";

export function Main() {
  return (
    <CMain>
      <Container>
        {Posts.map((post, index) => {
          return (
            <Post key={index}>
              <PostImage style={{ backgroundColor: "#6663FF" }}></PostImage>
              <div>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
              </div>
            </Post>
          );
        })}
      </Container>
    </CMain>
  );
}
