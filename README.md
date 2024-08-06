# Next.js To-Do List App

This is a Next.js to-do list application built with TypeScript. The app supports CRUD (Create, Read, Update, Delete) operations on a single page. Each record can be added, edited, and deleted.

- **Add To-Do:** Add new to-do items.
- **Edit To-Do:** Edit existing to-do items.
- **Delete To-Do:** Delete to-do items.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone [https://github.com/your-username/nextjs-todo-app.git](https://github.com/dLuxKid/todo-app.git)
    cd nextjs-todo-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and configure your database connection and other environment variables as needed. For example:

```env
DATABASE_URL=postgres://username:password@localhost:5432/yourdatabase
```

### Database Setup

1. Run the database migrations to set up the required tables:

    ```sh
    npm run migrate
    # or
    yarn migrate
    ```

### Running the App

1. Start the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `out` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start` or `yarn start`

Starts the production build.

### `npm run migrate` or `yarn migrate`

Runs database migrations.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
