import Loader from "react-loader-spinner";
function LoadingPage() {
    return (
        <div
              style={{
                width: "100%",
                height: "100",
                display: "flex",
               justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Loader type="ThreeDots" color="#562D40" height="100" width="100" />
            </div>
    )
}

export default LoadingPage
