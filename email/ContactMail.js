import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const ContactMail = ({ name, email, message }) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={text}>Hello,</Text>
            <Text style={text}>
              You have received a new contact form submission from your portfolio website.
            </Text>
            <Section style={detailsContainer}>
              <Text style={label}>Name:</Text>
              <Text style={value}>{name}</Text>
              
              <Text style={label}>Email:</Text>
              <Text style={value}>{email}</Text>
              
              <Text style={label}>Message:</Text>
              <Text style={value}>{message}</Text>
            </Section>
          </Section>
          <Text style={footer}>
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactMail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '5px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
  textAlign: 'center',
};

const text = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const detailsContainer = {
  backgroundColor: '#f6f9fc',
  padding: '24px',
  borderRadius: '4px',
  margin: '20px 0',
};

const label = {
  color: '#666666',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px',
};

const value = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '0 0 16px',
};

const footer = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0',
  textAlign: 'center',
  padding: '0 48px',
};
