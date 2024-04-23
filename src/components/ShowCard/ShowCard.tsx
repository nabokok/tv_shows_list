import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StarIcon from '../Icons/StarIcon';
import { Show } from '@/types/Show';
import noImage from '/no-image.png';
import { Loader2 } from "lucide-react";

interface Props {
  show: Show,
}

function ShowCard({ show }: Props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { name, rating, image } = show;
  const modifiedName = name.replace(/\s+/g, '_');


  return (
    <Card className="w-full flex flex-col justify-between">
      <Link to={`/shows/${modifiedName}`}>
        <CardHeader className="flex-grow">
          <img src={image ? image.original : noImage} alt="" onLoad={() => setIsImageLoaded(true)} className="hidden" />
          {!isImageLoaded ?
            (<div className="h-[300px] flex items-center justify-center">
              <Loader2 className="h-16 w-16 animate-spin" />
            </div>) : (
              <img
                className="object-cover h-[300px]"
                src={image ? image.original : noImage}
                alt={name}
              />
            )
          }

        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <CardTitle className="mb-2">{name}</CardTitle>
          {rating.average && (
            <CardDescription className="mb-[3px] flex items-center gap-1 text-md">{rating.average} <StarIcon size="16" /></CardDescription>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}

export default ShowCard;
