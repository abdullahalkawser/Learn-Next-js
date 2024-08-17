"use client"; // Add this directive to make the component a Client Component

interface Props {
  error: Error;
}

const ErrorPage = ({ error }: Props) => {
  return (
    <div>
      <h1>Error</h1>
      <p>An unexpected error has occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorPage;
