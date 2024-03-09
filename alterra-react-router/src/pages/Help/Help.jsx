import { Link } from "react-router-dom";
import Button from "../../Component/Button/Button";

export default function Help() {
  return (
    <div className="w-full h-screen mx-auto flex items-center flex-col gap-5 justify-center">
      <h1 className="text-4xl font-extrabold ">
        Terima Kasih Telah Click Pages Ini
      </h1>
      <Link to={"/"}>
        <Button variant="primary" font="semiBold">
          Kembali
        </Button>
      </Link>
    </div>
  );
}
