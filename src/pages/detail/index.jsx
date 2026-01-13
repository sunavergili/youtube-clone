import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import ReactPlayer from "react-player";
import Description from "./description";
import ChannelInfo from "./channel-info";
import Card from "../../components/card";
import Comments from "./comments";

const Detail = () => {
  // videonun detayına erişmek için state te tutmamız gerekiyor
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  // videonun üzerine tıkladığımızda parama v id ye eşit olduğundan id değişkenine aktaralım
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  // use efect içinde bağımlılık diziisi ekliyorum.id her değiştirinde bu fonksiyon çalışıyor.

  useEffect(() => {
    // fonsksiyonun çalışma fonksşyonu
    setLoading(true);
    const params = {
      id,
      extend: "1",
    };

    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <div className="page max-w-[1280px] mx-auto flex flex-col lg:flex-row  gap-6">
      {/* {video alanı} */}
      <div className="flex-1 lg:max -w-[854px]">
        {/* {oynatıcı} */}
        <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="100%"
            controls
          />
        </div>

        {/* {bilgiler} */}
        <div className="space-y-4">
          <h1 className="text-xl font-bold line-clamp-2 leading leading-tight">
            {video?.title}
          </h1>
          <ChannelInfo video={video} />
          <Description video={video} />
          <Comments videoId={id} />
        </div>
      </div>
      {/* {önerilen videolar} */}
      <div className="lg:w-[400px]">
        <h2 className="text-lg font-semibold mb-4 hidden lg:block">
          İlgili videolar
        </h2>
        <div className="flex flex-col gap-5 @container">
          {video?.relatedVideos?.data?.map((video, key) => (
            <Card video={video} key={key} isRow />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
