import ImageSvg from "../../assets/image.svg";
import { CHeader, Container, Info } from "./style";

export function Header() {
  return (
    <CHeader>
      <Container>
        <Info>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            massa sit amet augue consectetur ullamcorper non ac massa.
          </p>
          <button>Botão</button>
        </Info>

        <img src={ImageSvg} />
      </Container>
    </CHeader>
  );
}
