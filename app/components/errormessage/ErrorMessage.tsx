type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div style={{ color: "red", marginTop: "10px" }}>
      {message}
    </div>
  );
}