# Admin Boilerplate - React + TypeScript + Vite

A comprehensive admin dashboard boilerplate built with modern React ecosystem, featuring authentication, data management, and a complete UI component library.

## 🚀 Features

### 🔐 Authentication & Authorization
- **Login System** with email/password authentication
- **OTP Verification** for secure login
- **Protected Routes** with automatic redirection
- **Token Management** with automatic refresh
- **User State Management** using Zustand
- **Cookie-based Session** persistence

### 🎨 UI Components & Design System
- **Radix UI Components** - Accessible, unstyled components
- **Tailwind CSS** - Utility-first styling
- **Custom Component Library** with consistent design patterns
- **Dark/Light Theme** support with next-themes
- **Responsive Design** - Mobile-first approach
- **Loading States** - Skeleton loaders and spinners
- **Toast Notifications** - User feedback system

### 📝 Form Management
- **React Hook Form** integration with Zod validation
- **Dynamic Form Builder** - Configurable form inputs
- **Input Types Supported**:
  - Text, Email, Password, Number
  - Select dropdowns with search
  - Date pickers
  - Text areas
  - Phone number inputs
  - OTP inputs
  - File uploads
  - Sliders and switches
  - Rich text editor (React Quill)
- **Form Validation** with real-time error handling
- **Custom Input Renderer** for dynamic form generation

### 📊 Data Management & Tables
- **Advanced Data Tables** with sorting, filtering, and pagination
- **Search Functionality** with debounced search
- **Bulk Actions** and row selection
- **Custom Cell Rendering** for complex data display
- **API Integration** with React Query for caching and synchronization
- **CRUD Operations** - Create, Read, Update, Delete with hooks

### 🔄 State Management & API
- **React Query** - Server state management and caching
- **Zustand** - Client state management
- **Axios Integration** - HTTP client with interceptors
- **API Error Handling** - Centralized error management
- **Request/Response Interceptors** - Automatic token handling
- **Optimistic Updates** - Better user experience

### 🧭 Navigation & Routing
- **React Router v7** - Modern routing solution
- **Nested Routes** - Organized route structure
- **Route Protection** - Authentication-based access control
- **Dynamic Navigation** - Context-aware menu items
- **Breadcrumb Navigation** - User location tracking

### 🏗️ Architecture & Development
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality and consistency
- **Modular Architecture** - Scalable folder structure
- **Custom Hooks** - Reusable business logic
- **Utility Functions** - Common helper functions

## 🛠️ Technology Stack

### Core Framework
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library
- **next-themes** - Theme management

### State Management
- **React Query** - Server state management
- **Zustand** - Client state management
- **React Hook Form** - Form state management

### Routing & Navigation
- **React Router v7** - Client-side routing

### HTTP & API
- **Axios** - HTTP client
- **React Query** - Data fetching and caching

### Form & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Utilities
- **js-cookie** - Cookie management
- **clsx** - Conditional className utility
- **tailwind-merge** - Tailwind class merging
- **sonner** - Toast notifications

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Commmon/         # Common components (forms, tables, etc.)
│   ├── layout/          # Layout components
│   └── ui/              # Base UI components
├── Pages/               # Page components
│   ├── AuthPages/       # Authentication pages
│   └── ProtectedPaths/  # Protected route pages
├── hooks/               # Custom React hooks
├── api/                 # API configuration and utilities
├── store/               # State management (Zustand)
├── utils/               # Utility functions
├── constants/           # Application constants
├── navigation/          # Routing configuration
└── types/               # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_PUBLIC_NODE_ENV=staging/uat/production
```

### API Configuration
Update `src/api/appConfig.ts` to configure your API endpoints.

## 📚 Usage Examples

### Creating a Form
Refer UserDetailFormPage.tsx

### Creating a Data Table
Refer UserPage.tsx

### Coming up
Multi-Select Input
Async Select Input
Table Filters
With RBAC Setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

