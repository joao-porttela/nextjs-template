# Next.js Template

A modern, feature-rich Next.js template with TypeScript, authentication, internationalization, and theming support.

## Features

- 🚀 **Next.js 15** with App Router
- 📘 **TypeScript** for type safety
- 🔐 **Authentication** system with JWT and email verification
- 🌐 **Internationalization** using next-intl
- 🎨 **Theming** with light/dark mode support
- 📱 **Responsive** design with mobile navigation
- 🔄 **Context API** for state management
- 🛠️ **Custom hooks** for reusable logic
- 🎯 **Error handling** with custom error boundaries
- 🎉 **UI Components** with shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joao-porttela/nextjs-template.git
cd nextjs-template
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
URL=http://localhost:3000
API_URL=your_api_url
PUBLIC_KEY=your_jwt_public_key
```

4. Start the development server:
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
src/
├── app/                   # App router pages and layouts
├── components/           # Reusable UI components
│   ├── error/           # Error handling components
│   ├── global/          # Global components (providers, layout)
│   ├── header/          # Header and navigation components
│   └── ui/              # UI components (buttons, cards, etc.)
├── config/              # Configuration files
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── i18n/                # Internationalization setup
├── interfaces/          # TypeScript interfaces
│   ├── auth/           # Authentication interfaces
│   ├── core/           # Core interfaces
│   └── lib/            # Library interfaces
└── lib/                # Utility functions and libraries
    └── auth/           # Authentication utilities
```

## Features in Detail

### Authentication

The template includes a complete authentication system with:
- JWT-based authentication
- Email verification
- Protected routes
- Persistent sessions with cookies
- Secure token handling
- Type-safe authentication hooks

### Internationalization

Support for multiple languages using next-intl:
- Easy language switching
- Locale-based routing
- Translation files in JSON format
- Server and client-side translation support
- SEO-friendly URLs with locale prefixes

### Theming

Built-in theme support with:
- Light/dark mode toggle
- System preference detection
- Persistent theme selection
- Customizable theme variables
- Seamless mode transitions

### UI Components

Pre-built components using shadcn/ui:
- Buttons and form controls
- Cards and layouts
- Navigation components
- Modal dialogs
- Toast notifications
- Scroll areas and separators

## Development

### Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript compiler check

### Adding New Features

1. **Pages**: Add new pages in `src/app/[locale]`
2. **Components**: Create reusable components in `src/components`
3. **API Routes**: Add API routes in `src/app/api`
4. **Translations**: Add translations in `messages/[locale].json`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [TypeScript](https://www.typescriptlang.org/) - Type safety
