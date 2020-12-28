import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  if (process.browser) {
    // client-side-only code
    console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);
    const [socket] = useState(
      () => new WebSocket(process.env.NEXT_PUBLIC_API_ENDPOINT as string)
    );

    useEffect(() => {
      socket.onopen = () => {
        console.log("connected");
      };
      socket.onclose = () => {
        console.log("disconnected");
      };
      socket.onmessage = ({ data }) => {
        console.log(data);
        setImgSrc(data);
      };
      return () => {
        socket.close();
      };
    }, []);
  }

  const [imgSrc, setImgSrc] = useState("");

  return (
    <Layout title="Gomiatsume">
      <p>
        {imgSrc === "" ? (
          ""
        ) : (
          <a href={imgSrc} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt="🗑" style={{ maxWidth: "100%" }} />
          </a>
        )}
      </p>
    </Layout>
  );
};

export default IndexPage;
