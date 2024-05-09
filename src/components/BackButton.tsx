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
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMTlMOC41IDEyTDE1LjUgNSIgc3Ryb2tlPSIjMjAwRTMyIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
        alt="SVG Button Icon"
      />
    </button>
  );
}

export default BackButton;
