export const LightLayout = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "30px",
        color: "#000",
      }}
    >
      <h3>Darks layouuts</h3>
      {children}
    </div>
  );
};
