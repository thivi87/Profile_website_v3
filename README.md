# Shaun Thivierge | Security Leader Portfolio

This is a modern, responsive personal portfolio and profile application for Shaun K. Thivierge, a Cyber & Physical Security Leader.

## 🚀 Managed by AI Studio

This application is written, managed, and deployed through **Google AI Studio Build**.

### Features
- **React 19 + TypeScript**: Modern, type-safe development.
- **Tailwind CSS v4**: Utility-first styling for a professional look.
- **Framer Motion**: Smooth, high-quality animations.
- **Gemini AI Assistant**: An interactive chat assistant powered by Gemini 3 Flash.
- **GitHub Integration**: Ready to be connected to your existing GitHub repository for deployment to your custom domain.

## 🛠️ Development

To run this application locally:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the dev server: `npm run dev`

## 📦 Deployment to GitHub Pages

To deploy this application to your existing GitHub repository and custom domain:

1.  **AI Studio Connection**: Use the **Settings** menu in AI Studio to "Connect to GitHub" and link it to your existing repository.
2.  **Base Path**: If your site is hosted at a subpath (e.g., `username.github.io/repo-name`), update the `base` property in `vite.config.ts`. If it's at the root of a custom domain, leave it as `/`.
3.  **GitHub Actions**: Ensure your repository has a GitHub Actions workflow for Vite. A sample workflow is provided in `.github/workflows/deploy.yml`.

## 🤖 Gemini AI Assistant

The assistant is configured in `src/components/GeminiChat.tsx`. It uses the `GEMINI_API_KEY` environment variable. In AI Studio, this key is automatically managed via the **Secrets** panel.
