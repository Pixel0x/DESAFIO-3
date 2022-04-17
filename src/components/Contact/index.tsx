import { ContactStyle, Container } from "./style";

export function Contact() {
  return (
    <ContactStyle>
      <Container>
        <h1>Entre em contato</h1>
        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="tel" name="tel" placeholder="Telefone" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit" id="button">
            Enviar Mensagem
          </button>
        </form>
      </Container>
    </ContactStyle>
  );
}
