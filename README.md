# Payzoo Prelaunch Landing Page

## Project Overview

Payzoo is a revolutionary payment solution designed for multiple African and European countries. This repository contains the prelaunch landing page for collecting leads before the official launch of the Payzoo service.

### Key Features of Payzoo

- **For Individuals**: Digital wallet with instant scan payments, real-time payment requests, unlimited wallet transfers, Tap to Pay functionality, and unified payment methods.
- **For Merchants**: Revolutionary payment terminal with an intuitive dashboard, smart QR code, support for all payment methods, real-time analytics, and 1-click refunds.
- **For Developers**: Powerful RESTful API with clear documentation, sandbox for testing, fast webhooks, SDKs for multiple languages, and quick 10-minute integration.

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone https://github.com/payzoo/landing.git

# Step 2: Navigate to the project directory
cd landing

# Step 3: Install the dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Project Structure

This project is built with:

- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript
- **React**: UI library
- **shadcn-ui**: UI component library
- **Tailwind CSS**: Utility-first CSS framework

## Deployment

The project is configured to deploy automatically to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Set up Node.js
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### Permissions

The GitHub Actions workflow requires write permissions to the repository contents. This is configured in the workflow file with:

```yaml
permissions:
  contents: write
```

## Development

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally

## Multilingual Support

The landing page supports both English and French languages, with content for:

- Main sections
- FAQ
- Form elements
- Feature descriptions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.
