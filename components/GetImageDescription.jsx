import FetchData from "./FetchData";

function GetImageDescription({ imageUrl }) {
  return <FetchData imageUrl={imageUrl}></FetchData>;
}

export default GetImageDescription;
