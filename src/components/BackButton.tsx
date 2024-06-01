import { UrlProps } from "../types/TranscriptReport.types";
import { useNavigate } from "react-router-dom";

function BackButton(props: UrlProps) {
  const navigate = useNavigate();

  return (
    <button
      className="back-button"
      onClick={() => {
        navigate(props.path);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#1D1617" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
}

export default BackButton;
