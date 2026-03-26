type SuccessMessageProps = {
  message: string;
};

export default function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div style={{ color: "green", marginTop: "10px" }}>
      {message}
    </div>
  );
}