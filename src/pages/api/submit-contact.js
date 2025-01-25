import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, location, companyName, service, message } = req.body;

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: 'New Contact Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Company Name: ${companyName}
        Service: ${service}
        Message: ${message}
      `,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Quote request sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
}