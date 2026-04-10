# Sharda Global Residential School Website

A modern, responsive website for Sharda Global Residential School built with React, TypeScript, and Tailwind CSS. This site showcases the school's programs, facilities, admission process, and provides a platform for prospective students and parents to engage with the institution.

![Version](https://img.shields.io/badge/version-0.0.0-blue) ![Type](https://img.shields.io/badge/type-module-brightgreen) ![License](https://img.shields.io/badge/license-MIT-green)

---

## 🎯 Features

### Core Features
- **🏠 Interactive Home Page** - Hero section with highlights, leadership profiles, programs showcase, and testimonials
- **📚 Academics Section** - Complete curriculum information and educational programs
- **🎓 Admissions Portal** - Admission form, eligibility criteria, document requirements, and enrollment procedure
- **🏢 Facilities Showcase** - Display of school infrastructure including labs, libraries, sports facilities, and more
- **📅 Events Management** - Upcoming events and important dates
- **🖼️ Photo Gallery** - Visual showcase of campus life and activities
- **📝 About Us** - School mission, vision, values, and infrastructure details
- **📞 Contact Page** - Contact form, location, and communication channels

### Technical Features
- **Responsive Design** - Mobile-first approach with full responsiveness across all devices
- **Dark Mode Support** - Theme switching capability via next-themes
- **Smooth Animations** - Framer Motion for elegant page transitions and component animations
- **Component Library** - Comprehensive UI components using Radix UI primitives
- **Form Handling** - React Hook Form with Zod validation
- **Toast Notifications** - Sonner toast system for user feedback
- **Type Safety** - Full TypeScript support throughout the application
- **Performance Optimized** - Built with Vite for fast development and production builds
- **SEO Friendly** - Proper semantic HTML and meta tags

---

## 🛠️ Tech Stack

### Frontend Framework & Tooling
- **React 18.3.1** - UI library
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 5.4** - Next generation build tool
- **React Router v6** - Client-side routing
- **React SWC** - Fast React compilation

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Framer Motion 12.29** - Animation library
- **Lucide React** - SVG icon pack
- **Next Themes** - Theme management

### Form & Validation
- **React Hook Form 7.61** - Efficient form management
- **Zod 3.25** - TypeScript-first schema validation
- **Hookform Resolvers** - Integration layer for validation

### Data & State Management
- **TanStack React Query 5.83** - Server state management and caching

### Utilities & Plugins
- **React Router DOM 6.30** - Routing library
- **Class Variance Authority** - Building class name utilities
- **Clsx & Tailwind Merge** - CSS class management
- **Date FNS 3.6** - Date manipulation
- **Input OTP** - OTP input component

### Development Tools
- **Vitest 3.2** - Unit test framework
- **ESLint 9.32** - Code linting
- **PostCSS 8.5** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📁 Project Structure

```
global-school/
├── public/
│   └── robots.txt                    # SEO robots configuration
├── src/
│   ├── assets/
│   │   └── images/                   # Image assets
│   ├── components/
│   │   ├── home/                     # Home page sections
│   │   │   ├── CTASection.tsx       # Call-to-action section
│   │   │   ├── Facilities.tsx       # Facilities showcase
│   │   │   ├── HeroSection.tsx      # Hero banner
│   │   │   ├── HighlightsSection.tsx # Key highlights
│   │   │   ├── LeadershipSection.tsx # Leadership team
│   │   │   ├── ProgramsSection.tsx  # Educational programs
│   │   │   ├── TestimonialsSection.tsx # Student testimonials
│   │   │   ├── WhyChooseUsSection.tsx  # Why choose school
│   │   │   └── index.ts              # Barrel export
│   │   ├── layout/                   # Layout components
│   │   │   ├── Footer.tsx           # Footer with links
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   ├── Layout.tsx           # Page layout wrapper
│   │   │   ├── ScrollToTop.tsx      # Scroll behavior
│   │   │   └── index.ts              # Barrel export
│   │   └── ui/                       # Reusable UI components
│   │       ├── accordion.tsx         # Accordion component
│   │       ├── animated-section.tsx  # Animation wrappers
│   │       ├── avatar.tsx            # Avatar component
│   │       ├── button.tsx            # Button component
│   │       ├── card.tsx              # Card component
│   │       ├── carousel.tsx          # Carousel slider
│   │       ├── dialog.tsx            # Modal dialog
│   │       ├── form.tsx              # Form wrapper
│   │       ├── input.tsx             # Input field
│   │       ├── label.tsx             # Form label
│   │       ├── section-heading.tsx   # Section heading
│   │       ├── select.tsx            # Select dropdown
│   │       ├── sheet.tsx             # Drawer/sheet
│   │       ├── sidebar.tsx           # Sidebar component
│   │       ├── tabs.tsx              # Tab component
│   │       ├── textarea.tsx          # Textarea field
│   │       ├── toast.tsx             # Toast notification
│   │       ├── toaster.tsx           # Toast container
│   │       ├── tooltip.tsx           # Tooltip component
│   │       ├── whatsapp-button.tsx   # WhatsApp CTA button
│   │       ├── sonner.tsx            # Sonner toast
│   │       └── ...                   # Other UI components
│   ├── hooks/
│   │   ├── use-mobile.tsx            # Mobile detection hook
│   │   └── use-toast.ts              # Toast hook
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   ├── pages/
│   │   ├── About.tsx                 # About page
│   │   ├── Academics.tsx             # Academics page
│   │   ├── Admission.tsx             # Admission page with form
│   │   ├── Contact.tsx               # Contact page
│   │   ├── Events.tsx                # Events listing
│   │   ├── Facilities.tsx            # Facilities detail page
│   │   ├── Gallery.tsx               # Photo gallery
│   │   ├── Index.tsx                 # Home page
│   │   └── NotFound.tsx              # 404 page
│   ├── test/
│   │   ├── example.test.ts           # Example test
│   │   └── setup.ts                  # Test setup
│   ├── App.tsx                       # Main app component
│   ├── App.css                       # App styles
│   ├── index.css                     # Global styles
│   ├── main.tsx                      # Entry point
│   └── vite-env.d.ts                 # Vite environment types
├── .eslintrc.js                      # ESLint configuration
├── components.json                   # Component library config
├── eslint.config.js                  # ESLint rules
├── index.html                        # HTML template
├── package.json                      # Dependencies
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.ts                # Tailwind CSS config
├── tsconfig.json                     # TypeScript base config
├── tsconfig.app.json                 # TypeScript app config
├── tsconfig.node.json                # TypeScript node config
├── vite.config.ts                    # Vite configuration
├── vitest.config.ts                  # Vitest configuration
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **Bun** (package manager used in this project) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/global-school.git
   cd global-school
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080` (default Vite port)
   - The page will hot-reload on changes

---

## 📜 Available Scripts

### Development
```bash
# Start development server with HMR
bun run dev
```

### Building
```bash
# Build for production
bun run build

# Build with development mode enabled
bun run build:dev

# Preview production build locally
bun run preview
```

### Code Quality
```bash
# Run ESLint to check code style
bun run lint

# Run unit tests
bun run test

# Run tests in watch mode
bun run test:watch
```

---

## 📖 Pages & Routes

The website includes the following pages:

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home (Index) | Landing page with hero, highlights, programs, and testimonials |
| `/about` | About | School information, mission, vision, values, and infrastructure |
| `/academics` | Academics | Curriculum details and educational programs |
| `/admission` | Admission | Admissions form, eligibility, documents, and enrollment steps |
| `/facilities` | Facilities | Detailed showcase of school infrastructure |
| `/events` | Events | Upcoming events and important dates |
| `/gallery` | Gallery | Photo gallery of school activities and campus |
| `/contact` | Contact | Contact form and communication information |
| `*` | Not Found | 404 error page for undefined routes |

---

## 🎨 Key Components

### Home Page Components
- **HeroSection** - Eye-catching banner with CTA buttons
- **HighlightsSection** - Key statistics and highlights
- **LeadershipSection** - School leadership team profiles
- **ProgramsSection** - Educational programs overview
- **Facilities** - Featured facilities showcase
- **WhyChooseUsSection** - Reasons to choose the school
- **TestimonialsSection** - Student and parent testimonials
- **CTASection** - Call-to-action for admissions

### Layout Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Links, contact info, and social media
- **Layout** - Main page wrapper with Header and Footer
- **ScrollToTop** - Auto-scroll to top on route changes

### UI Components
The project uses a comprehensive set of components built on Radix UI:
- Form components (Input, Textarea, Select, Label, etc.)
- Display components (Card, Badge, Avatar, etc.)
- Interactive components (Accordion, Tabs, Dialog, Sheet, etc.)
- Animated components (Custom animation wrappers)

---

## ⚙️ Configuration

### Vite Configuration
- **Host**: `[::]` (IPv6 localhost)
- **Port**: `8080`
- **HMR Overlay**: Disabled
- **Plugins**: React SWC, Component Tagger (dev mode)
- **Alias**: `@` → `./src`

### Tailwind CSS
- **Dark Mode**: Class-based
- **Fonts**: Poppins (headings), Inter (body)
- **Colors**: Custom theme with primary, secondary, accent colors
- **Extensions**: Typography plugin, custom animations

### TypeScript
- **Target**: ES2020
- **Module**: ESNext
- **Strict**: Yes
- **Paths**: `@/*` mapped to `./src`

---

## 🧪 Testing

### Running Tests
```bash
# Run all tests once
bun run test

# Watch mode - reruns tests on file changes
bun run test:watch
```

### Test Files Location
- Located in `src/test/` directory
- Example: `example.test.ts`

### Test Setup
- Configured via `vitest.config.ts`
- Test utilities setup in `src/test/setup.ts`

---

## 🎯 Key Features Implementation

### Form Handling (Admission Form)
- Uses React Hook Form for efficient form management
- Zod schema validation for type-safe validation
- Captures: Parent name, email, phone, child name, age, class, and message
- Form validation and error handling included

### Animations
- Page transitions and entrance animations via Framer Motion
- Stagger animations for content reveals
- Smooth scroll behavior
- Component-level animations for interactive elements

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Mobile navigation menu with animated hamburger
- Responsive grid layouts

### Theme Support
- Light/Dark mode toggle via next-themes
- CSS custom properties for theme colors
- Persistent theme preference

### Accessibility
- Radix UI components with built-in accessibility
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader friendly

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| sm | 640px | Tablets |
| md | 768px | Small laptops |
| lg | 1024px | Desktops |
| xl | 1280px | Large desktops |
| 2xl | 1400px | Extra-large displays |

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📚 Additional Integration Points

### WhatsApp Integration
- WhatsApp button component for quick messaging
- Located in `components/ui/whatsapp-button.tsx`

### Toast Notifications
- Sonner toast system for notifications
- React-based toast hooks for easy integration

### Icon Library
- Lucide React for consistent icon set
- 460+ icons available

### Charts & Data Visualization
- Recharts integration for data visualization
- Ready for analytics dashboards

---

## 🔧 Customization Guide

### Adding New Pages
1. Create a new component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Add navigation link in `Header.tsx`

### Styling
- Edit `tailwind.config.ts` for theme customization
- Use `@apply` directive for component styles
- Custom CSS in component files or `App.css`

### Adding Components
1. Create component in appropriate folder (`src/components/`)
2. Follow existing component patterns
3. Use TypeScript interfaces for props

### Environment Variables
Create `.env` file for environment-specific variables (currently not used, but can be added):
```
VITE_API_URL=https://api.example.com
```

---

## 🚀 Deployment

The project can be deployed to various platforms:

### Production Build
```bash
bun run build
```

Creates optimized production bundle in `dist/` directory.

### Deployment Options
- **Vercel** - Recommended for React apps
- **Netlify** - Drag & drop or git integration
- **GitHub Pages** - Static hosting
- **Docker** - Container deployment
- **AWS, Azure, GCP** - Cloud platform deployment

### Environment Setup
- Set Node.js version in deployment platform
- No build-time environment variables currently required
- CORS headers may need configuration for API calls

---

## 📞 Contact Information

**School Details:**
- **Name**: Sharda Global Residential School
- **Location**: Nawada, India
- **Phone**: Check footer or contact page
- **Email**: Check footer or contact page

**Social Media:**
- Facebook
- Instagram
- Twitter
- YouTube

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow existing code style
- Use TypeScript for type safety
- Add proper component documentation
- Ensure responsive design is maintained
- Test changes before submitting PR

---

## 📄 License

This project is private and proprietary to Sharda Global Residential School.

---

## 🙋 Support & Questions

For questions or issues:
1. Check existing documentation
2. Review component source code
3. Check footer for contact information
4. Submit an issue with detailed description

---

## 📈 Performance Metrics

### Page Load Optimization
- Lazy loading of routes via React Router
- Image optimization
- CSS minification
- JavaScript code splitting

### Best Practices
- Mobile-first responsive design
- Semantic HTML
- Accessible component patterns
- Type-safe development with TypeScript
- ESLint code quality checks

---

## 🗺️ Future Enhancements

Potential features for future development:
- [ ] Student portal login
- [ ] Online assignment submission
- [ ] Parent-teacher communication system
- [ ] Event registration and ticketing
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Search functionality
- [ ] Blog/News section
- [ ] Staff directory
- [ ] Virtual tour

---

**Last Updated**: April 2026  
**Version**: 0.0.0
