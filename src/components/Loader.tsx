function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen space-x-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-blue-600 rounded-full animate-bounce w-4 h-4"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "0.8s",
          }}
        />
      ))}
    </div>
  );
}

export default Loader;
