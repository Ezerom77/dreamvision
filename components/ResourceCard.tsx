import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard = ({
  id,
  title,
  image,
  downloadNumber,
  downloadLink,
}: Props) => {
  return (
    <Card className=" w-[250px] max-w-full border-0 !bg-transparent sm:max-w-[250px]">
      <Link href={downloadLink} target="_blank">
        <CardHeader className=" flex-center flex-col gap-2.5 !p-0">
          <div className="h-full w-full">
            <Image
              src={image}
              alt={title}
              width={268}
              height={308}
              className=" h-full rounded-md object-cover"
            />
          </div>
          <CardTitle className=" text-white body-text line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className=" flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" width={20} height={20} alt="download" />
          {downloadNumber}
        </div>
        <Link
          href={downloadLink}
          target="_blank"
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" width={13} height={0} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
