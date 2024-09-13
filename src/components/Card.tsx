import githubIcon from "@/svgs/github.svg";
import Image from "next/image";

interface CardProps {
  title: string;
  icon?: string;
  color?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  color,
  children,
}: CardProps) => {
  let imgClassName = "w-7 h-7";
  if (color) {
    imgClassName = imgClassName + ` fill-${color}`;
  }

  console.log(imgClassName);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
      {icon && (
        <Image
          priority
          src={icon}
          alt={`${title} Icon`}
          width={40}
          height={40}
          className="mb-4" // Add margin-bottom to provide spacing between image and title
        />
      )}
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          {title}
        </h5>
      </a>
      <div className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
        {children}
      </div>
    </div>
  );
};

export default Card;
