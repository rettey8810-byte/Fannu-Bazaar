# Adding Storyset Illustrations to Fannu Bazaar

## Recommended Illustrations from Storyset.com

Visit https://storyset.com and search for these terms to find suitable illustrations:

### For Hero Section / Landing Page:
1. **"Online world"** or **"Team work"** - For the main hero banner
2. **"Business deal"** or **"Agreement"** - For the how-it-works section
3. **"Customer service"** or **"Support"** - For customer benefits section
4. **"Worker"** or **"Repair"** or **"Construction"** - For worker benefits section

### For Login/Auth Pages:
1. **"Login"** or **"Security"** or **"Access"** - For login screen
2. **"Sign up"** or **"Register"** - For signup screen
3. **"Welcome"** or **"Hello"** - For welcome screen

### For Dashboards:
1. **"Data analysis"** or **"Dashboard"** - For admin overview
2. **"Task list"** or **"Checklist"** - For job management
3. **"Rating"** or **"Review"** - For reviews section
4. **"Profile"** or **"Personal information"** - For profile pages

## How to Download and Add Images:

1. **Visit Storyset.com** and search for the terms above
2. **Choose a style**: Rafiki (outlined), Bro (flat), Amico (isometric), Pana (solid), or Cuate (lineal)
3. **Customize colors** to match the mint green theme (#10B981)
4. **Download as SVG** (recommended) or PNG
5. **Save to**: `public/images/` folder in the project
6. **Reference in code**: `/images/your-image-name.svg`

## Current Image Structure:

```
public/
├── images/
│   ├── hero-illustration.svg
│   ├── login-illustration.svg
│   ├── worker-illustration.svg
│   ├── customer-illustration.svg
│   └── ... (add more as needed)
└── logo.png
```

## Code Integration Example:

In your React components, use the images like this:

```tsx
<img 
  src="/images/hero-illustration.svg" 
  alt="Fannu Bazaar Hero" 
  className="w-full h-auto max-w-md mx-auto"
/>
```

## Recommended Color Scheme for Storyset:

- **Primary**: #10B981 (Mint Green)
- **Secondary**: #F59E0B (Amber)
- **Background**: #F0FDF4 (Light Mint)
- **Text**: #1F2937 (Dark Gray)

This will ensure the illustrations match the app's theme.
