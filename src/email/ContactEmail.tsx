import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  message: string;
};

const ContactEmail = ({ message }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="border border-black/30 bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message
              </Heading>
              <Text>{message}</Text>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
