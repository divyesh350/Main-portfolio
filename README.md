# Portfolio Website - Divyesh Bakaraniya

A modern, responsive portfolio website built with Next.js, React, and TailwindCSS. View the live website at [https://divyeshbakaraniya.vercel.app/](https://divyeshbakaraniya.vercel.app/)

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 📧 Contact form with email notifications
- 🗄️ MongoDB integration for storing contact submissions
- 📊 Project showcase with filtering
- 🎨 Modern UI with smooth animations
- ⚡ Fast page loads with Next.js
- 📝 Dynamic content rendering

## Tech Stack

- **Frontend:**
  - Next.js 14
  - React 18
  - TailwindCSS
  - Framer Motion (animations)
  - Lucide React (icons)
  - Swiper (carousels)
  - React CountUp
  - Next-themes (dark mode)

- **Backend:**
  - MongoDB (database)
  - Mongoose (ODM)
  - Nodemailer (email sending)
  - React Email (email templates)

- **Development Tools:**
  - TypeScript
  - PostCSS
  - Tailwind Merge
  - Zod (validation)

## Project Structure

\`\`\`
my-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   └── projects/          # Projects page
├── components/            # React components
│   └── ui/               # UI components
├── email/                # Email templates
├── helper/               # Helper functions
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## Key Features Explained

### 1. Contact Form
- Real-time form validation
- Email notifications using Nodemailer
- MongoDB storage of submissions
- Auto-reply to users
- Professional email templates

### 2. Projects Section
- Filterable project gallery
- Project cards with hover effects
- Detailed project information
- Links to live demos and repositories

### 3. About Section
- Professional introduction
- Skills showcase
- Experience timeline
- Downloadable CV

### 4. Reviews Section
- Client testimonials
- Swiper carousel integration
- Animated review cards

## Setup Instructions

1. **Clone the repository:**
   \`\`\`bash
   git clone <repository-url>
   cd my-app
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables:**
   Create a \`.env.local\` file with the following:
   \`\`\`env
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   \`\`\`

4. **Gmail Setup for Contact Form:**
   - Enable 2-Step Verification in your Google Account
   - Generate an App Password
   - Use the App Password in EMAIL_PASS

5. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Build for production:**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

## Environment Variables

- \`MONGODB_URI\`: MongoDB connection string
- \`EMAIL_USER\`: Gmail address for sending emails
- \`EMAIL_PASS\`: Gmail app password for authentication

## API Routes

### \`/api/contact\`
- **Method:** POST
- **Purpose:** Handle contact form submissions
- **Functionality:**
  - Validates input
  - Stores in MongoDB
  - Sends confirmation emails
  - Returns success/error response

## Components

### Core Components
- \`Header.jsx\`: Navigation and theme toggle
- \`Hero.jsx\`: Landing page hero section
- \`About.jsx\`: About me section with tabs
- \`Work.jsx\`: Projects showcase
- \`Contact.jsx\`: Contact form
- \`Reviews.jsx\`: Testimonials carousel

### UI Components
- Custom buttons
- Form inputs
- Cards
- Badges
- Theme toggler

## Email Templates

- \`ContactMail.js\`: Admin notification template
- \`UserConfirmationMail.js\`: User auto-reply template

## Deployment

The website is deployed on Vercel. For deployment:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy with \`git push\` to main branch

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Divyesh Bakaraniya**
- Website: [https://divyeshbakaraniya.vercel.app/](https://divyeshbakaraniya.vercel.app/)
- Email: bakaraniyadivyesh94@gmail.com
- Phone: +91 7487831144

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- All the open-source contributors