import { useNavigate } from "react-router-dom";

export const navigateTo = (path: string) => {
  console.log(path);
  const history = useNavigate();
  history(path);
};
