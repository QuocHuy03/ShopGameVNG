const Loading = () => {
  return (
    <>
      <div className="loadingContainer" style={{ display: "" }}>
        <div className="loading" style={{}}>
          <div style={{}} />
          <div style={{}} />
          <div style={{}} />
        </div>
      </div>
      <div
        id="gtLoading"
        className="gtWaving"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            'url("https://pay.mto.zing.vn/jssdk/core/static/loading.png")',
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 30px",
          backgroundSize: 70,
          margin: "auto",
          paddingTop: 55,
          textAlign: "center",
          animation: "1s linear 0s infinite normal none running waving",
          width: 100,
          height: 100,
          zIndex: 1000,
          borderRadius: "50%",
        }}
      >
        <div style={{}} />
        <div style={{}} />
        <div style={{}} />
      </div>
    </>
  );
};
export default Loading;
