import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import StarIcon from '../Icons/StarIcon';
import { Show } from '@/types/Show';
import noImage from '@/assets/images/no-image.png'

interface Props {
  show: Show,
}

function ShowCard({ show }: Props) {
  const { name, rating, image, id } = show;


  return (
    <Card className="w-full flex flex-col justify-between">
      <Link to={`/tv-shows/${id}`}>
        <CardHeader className="flex-grow">
          <img
            className="object-cover h-[300px]"
            src={image ? image.original : noImage}
            alt={name}
            loading="lazy"
          />
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <CardTitle className="mb-2">{name}</CardTitle>
          {rating.average && (
            <CardDescription className="mb-[3px] flex items-center gap-1 text-md">{rating.average} <StarIcon size="16" /></CardDescription>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}

export default ShowCard;
