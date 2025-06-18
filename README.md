# Chi-Ballon Event Planning Website

A modern, responsive React website for Chi-Ballon event planning and balloon decoration services. Built with React 19, Vite, and TailwindCSS.

## 🎈 About

Chi-Ballon specializes in creating magical events with professional balloon decorations, floral design, and comprehensive event planning services. This website showcases our portfolio, services, and provides an easy way for clients to inquire about events.

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Interactive Gallery**: Swiper-based image galleries with category filtering
- **Contact Forms**: Validated inquiry and contact forms with EmailJS integration
- **Modern UI**: Framer Motion animations and TailwindCSS styling
- **SEO Optimized**: Proper meta tags and structured data
- **Error Handling**: Comprehensive error boundaries and 404 page
- **Performance**: Optimized images and code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chi-ballon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_INQUIRY_TEMPLATE_ID=your_inquiry_template_id
   REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── component/
│   ├── page/
│   │   ├── AboutUs.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── InquiryForm.jsx
│   │   ├── Layout.jsx
│   │   ├── NotFound.jsx
│   │   └── ...
│   ├── ErrorBoundary.jsx
│   └── Home.jsx
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

### Testing
- `npm test` - Run unit tests in watch mode
- `npm run test:run` - Run unit tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:e2e:ui` - Run E2E tests with UI
- `npm run test:e2e:headed` - Run E2E tests in headed mode

### Utilities
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build artifacts
- `npm run prepare` - Set up Husky hooks

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create email templates for inquiry and contact forms
4. Get your Service ID, Template IDs, and Public Key
5. Add them to your `.env` file

## 🧪 Testing

### Unit Tests
The project uses Vitest and React Testing Library for unit testing:
```bash
npm test                 # Run tests in watch mode
npm run test:run        # Run tests once
npm run test:coverage   # Generate coverage report
```

### End-to-End Tests
Playwright is configured for E2E testing across multiple browsers:
```bash
npm run test:e2e        # Run E2E tests
npm run test:e2e:ui     # Run with Playwright UI
npm run test:e2e:headed # Run in headed mode
```

### Pre-commit Hooks
Husky and lint-staged ensure code quality:
- Automatic linting and formatting
- Type checking
- Running related tests

## 🔒 Security Features

- **Input Sanitization**: XSS protection for all form inputs
- **Rate Limiting**: Prevents form spam (3 submissions per 10 minutes)
- **Content Security Policy**: HTTP security headers
- **Environment Variables**: Secure credential management

## 📱 Progressive Web App

- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: Mobile installation support
- **Responsive Design**: Mobile-first approach
- **Touch Optimizations**: Enhanced mobile interactions

## 📊 Analytics & Monitoring

- **Google Analytics 4**: User behavior tracking
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: Exception monitoring
- **Conversion Tracking**: Form submissions and user actions

## 🎨 Customization

### Colors
The project uses a custom color palette:
- Gold: `#d4af37` (primary accent)
- Green: `#006400` (secondary)

### Images
Add your images to the `public/` directory and update the gallery data in the respective components.

### TypeScript
The project is fully typed with TypeScript for better developer experience and code safety.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure environment variables on your platform

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and TailwindCSS plugins. Configuration is in `vite.config.js`.

### ESLint
ESLint is configured with React hooks and refresh plugins. See `eslint.config.js`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For support, email [your-email] or create an issue in this repository.
