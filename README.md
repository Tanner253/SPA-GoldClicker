# Gold Clicker Mining - Landing Page

This project is a single-page React application designed to showcase the "Gold Clicker Mining" game, its mechanics, and its investment potential.

## Setup

1.  **Clone the repository (if you haven't already).**
2.  **Navigate to the `SPA` directory:**
    ```bash
    cd SPA
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Development Server

To start the development server and view the application locally:

```bash
npm start
```

This will typically open the application in your default web browser at `http://localhost:3000`.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build` directory.

## Deploying to GitHub Pages

This project is set up to be easily deployed to GitHub Pages using the `gh-pages` package.

1.  **Ensure your `package.json` is correctly configured:**
    *   Update the `homepage` field to reflect your GitHub Pages URL:
        ```json
        "homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>"
        ```
        Replace `<YOUR_GITHUB_USERNAME>` with your GitHub username and `<YOUR_REPOSITORY_NAME>` with the name of the repository this SPA resides in (or the main project repository if the SPA is a subfolder being deployed).

2.  **Run the deployment script:**
    ```bash
    npm run deploy
    ```
    This command will first build the project and then push the contents of the `build` folder to a `gh-pages` branch on your GitHub repository, making it live.

3.  **Configure GitHub Pages Source:**
    *   Go to your repository's settings on GitHub.
    *   Navigate to the "Pages" section.
    *   Ensure the source is set to deploy from the `gh-pages` branch and the `/ (root)` folder. 