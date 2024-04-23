
import { ShowData } from "@/types/Show";
import ShowCard from "../ShowCard";

interface Props {
  list: ShowData[] | null,
}

function CatalogList({ list }: Props) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {list && (
        list.map(({ show }) => (
          <ShowCard key={show.id} show={show} />
        ))
      )}
    </div>
  )
}

export default CatalogList;
